import test from 'node:test';
import assert from 'node:assert/strict';
import { generateLocalBusinessSchema, generateFaqSchema } from './seo';
import { SALON_DATA } from '../data/salonData';

test('generateLocalBusinessSchema includes exact authentic salon details', () => {
  const schema = generateLocalBusinessSchema('https://ais-pre-ugm4nlq2pshqpppp3hx2s7-830287238515.asia-east1.run.app/');

  assert.equal(schema['@context'], 'https://schema.org');
  assert.ok(schema['@type'].includes('HairSalon'));
  assert.ok(schema['@type'].includes('LocalBusiness'));
  assert.equal(schema.name, 'HEAD ZONE');
  assert.equal(schema.telephone, '09634556912');
  assert.equal(schema.address.addressLocality, 'Haridwar');
  assert.equal(schema.address.addressRegion, 'Uttarakhand');
  assert.equal(schema.address.postalCode, '249401');
  assert.equal(schema.aggregateRating.ratingValue, '5.0');
  assert.equal(schema.aggregateRating.reviewCount, '813');
  assert.equal(schema.openingHoursSpecification.length, 1);
  assert.equal(schema.openingHoursSpecification[0].opens, '09:30');
  assert.equal(schema.openingHoursSpecification[0].closes, '21:00');

  // Verify all 8 real services are in catalog
  assert.ok(schema.hasOfferCatalog);
  assert.equal(schema.hasOfferCatalog.itemListElement.length, 8);
  const serviceTitles = schema.hasOfferCatalog.itemListElement.map((e) => e.itemOffered.name);
  assert.ok(serviceTitles.includes('Haircut & Styling'));
  assert.ok(serviceTitles.includes('Beard Styling & Grooming'));
  assert.ok(serviceTitles.includes('Hair Spa & Treatments'));
  assert.ok(serviceTitles.includes('Facial & Skin Care'));
});

test('generateFaqSchema contains real salon FAQs', () => {
  const faqSchema = generateFaqSchema();
  assert.equal(faqSchema['@context'], 'https://schema.org');
  assert.equal(faqSchema['@type'], 'FAQPage');
  assert.equal(faqSchema.mainEntity.length, SALON_DATA.faqs.length);
  assert.ok(faqSchema.mainEntity[0].name.includes('operating hours'));
  assert.ok(faqSchema.mainEntity[1].name.includes('parking'));
  assert.ok(faqSchema.mainEntity[2].name.includes('product brands'));
});
