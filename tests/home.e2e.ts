import { test, expect } from "@playwright/test";

test("portfolio carga correctamente", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Daniel Ramirez",
    }),
  ).toBeVisible();
});
