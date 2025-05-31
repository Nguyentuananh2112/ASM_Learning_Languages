import { db } from './db';
import { languages, units } from './schema';
import { eq } from 'drizzle-orm';

async function seed() {
  // Seed languages nếu chưa có dữ liệu
  const langs = [
    { code: 'vi', name: 'Vietnamese', flag: '/vn-flag.svg' },
    { code: 'en', name: 'English', flag: '/gb.svg' },
    { code: 'jp', name: 'Japanese', flag: '/jp.svg' },
    { code: 'fr', name: 'French', flag: '/fr.svg' },
    { code: 'cn', name: 'Chinese', flag: '/cn.svg' },
    { code: 'kr', name: 'Korean', flag: '/kr.svg' },
  ];
  const existing = await db.select().from(languages);
  if (existing.length === 0) {
    await db.insert(languages).values(langs);
    console.log('Seeded languages');
  }

  // Seed units cho mỗi ngôn ngữ nếu chưa có dữ liệu
  const allLangs = await db.select().from(languages);
  for (const lang of allLangs) {
    const existingUnits = await db.select().from(units).where(eq(units.languageId, lang.id));
    if (existingUnits.length === 0) {
      const defaultUnits = [
        { title: 'Unit 1', description: 'Basics', languageId: lang.id },
        { title: 'Unit 2', description: 'Food', languageId: lang.id },
        { title: 'Unit 3', description: 'Family', languageId: lang.id },
      ];
      await db.insert(units).values(defaultUnits);
      console.log(`Seeded units for ${lang.name}`);
    }
  }
}

seed().then(() => process.exit(0)); 