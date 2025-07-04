// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST = 'http://localhost:5173/';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat';
test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST);


  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});

// test para validar que al pulsar el botón se actualiza la cita y la imagen
test('app updates fact and image on button click', async ({ page }) => {
  await page.goto(LOCALHOST);


  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');
  const button = await page.getByRole('button');

  const textContentInit = await text.textContent() ?? '';
  const imageSrcInit = await image.getAttribute('src') ?? '';
  await button.click();
  await expect(text).not.toHaveText(textContentInit);
  await expect(image).not.toHaveAttribute('src', imageSrcInit);
});