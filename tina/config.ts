import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "abb538ea-d02f-4d3a-9382-21b4e45a3ad9",
  token: "814e2cedf4ed9663f1879c01b9a0ef9781d6c64b",
  build: {
    outputDir: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Home",
        name: "home",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "string",
            label: "Description",
            name: "description",
          },
          {
            type: "object",
            label: "Hero Section",
            name: "hero",
            fields: [
              {
                type: "string",
                label: "Heading",
                name: "heading",
              },
              {
                type: "string",
                label: "Subheading",
                name: "subheading",
              },
            ],
          },
        ],
      },
    ],
  },
});
