
# Figma to Code Conversion Using Builder.io CLI

This guide describes the process of converting Figma designs to code using the Builder.io CLI. It includes instructions on exporting designs, configuring code generation rules, and executing the CLI tool to create or update components and pages.

---

## Table of Contents

- [1. Create a Builder.io Account](#1-create-a-builderio-account)  
- [2. Export Design from Figma](#2-export-design-from-figma)  
- [3. Create `.builderrules` File](#3-create-builderrules-file)  
- [4. Create `.builderignore` File](#4-create-builderignore-file)  
- [5. Run the CLI Command](#5-run-the-cli-command)  
- [6. Integrate with Coding Agent (GitHub Copilot)](#6-integrate-with-coding-agent-github-copilot)  
- [Caveats](#caveats)

---

## 1. Create a Builder.io Account

1. Go to [https://builder.io](https://builder.io).  
2. Sign up for an account.  
3. Log in to access your workspace.  

---

## 2. Export Design from Figma

1. Open your design file in Figma.  
2. Run the **Builder.io plugin** from the Figma menu.  
3. Select the frame or component you want to export.  
4. The plugin will generate a CLI command based on your selection.  
5. Copy the generated CLI command.

---

## 3. Create `.builderrules` File

In the root directory of your project, create a file named `.builderrules`. This file defines how the code should be generated from Figma designs.

### Example `.builderrules` content:

```txt
# Project-wide guidelines

Follow BEM naming convention for CSS classes
Use functional components with TypeScript interfaces for props
Add JSDoc comments to all exported functions
Using nextjs generate code according to that
Properly identify image and icon — if it is an icon, create it as SVG; if it is an image, use Next.js <Image> tag

# Component structure

All components should have prop validation
Place components in /components/{ComponentName}.tsx structure
Do not hardcode height/width in components
Use existing components instead of regenerating them when nested

# Styling guidelines

Use Tailwind CSS utility classes for styling
Prefer grid layout over flexbox when appropriate
Ensure all interactive elements have proper focus states

# Page generation guideline

Generate pages inside /pages directory (Next.js convention)
Use existing components from /components folder when available
Do not regenerate the common page header used across the project
````

---

## 4. Create `.builderignore` File

In the root directory, create a `.builderignore` file to exclude files or folders from code generation.

### Example `.builderignore` content:

```txt
# Exclude test files
**/*.test.tsx
**/*.spec.ts

# Exclude specific directories
node_modules/
.next/
dist/

# Exclude specific files
src/legacy-components/
src/utils/deprecated-helpers.ts
```

---

## 5. Run the CLI Command

1. Open a terminal in the root directory of your project.
2. Paste the CLI command copied from the Figma plugin.
3. The CLI will prompt you to select one of the following actions:

   * Create a new page
   * Update an existing page
   * Create a new component
   * Update an existing component (e.g., `ContentCard`)
4. After generation, you will be prompted to:

   * **Accept** the generated code
   * **Refine** the generated code
   * **Revert** the changes
5. If you choose **Refine**, input the specific changes you want. The CLI will apply those changes and regenerate the code.

---

## 6. Integrate with Coding Agent (GitHub Copilot)

To assist with refining or extending the generated code, you can integrate GitHub Copilot in VSCode.

### Setup

1. Install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) in Visual Studio Code.
2. Create a file at `.github/copilot-guideline.md` in your project.

### Purpose

The `copilot-guideline.md` file provides Copilot with context and best practices specific to your project. This helps Copilot align with your coding standards and design system when generating or fixing code.

### Example Use Cases

* **Fixing Design Issues:** Ask Copilot to adjust layout, spacing, or style inconsistencies in Builder.io-generated code.
* **Refactoring Components:** Prompt Copilot to break a large component into smaller modular components.
* **Enforcing Guidelines:** Ensure Copilot-generated code uses Tailwind CSS, follows the BEM naming convention, and adheres to `.builderrules`.

> Tip: Include examples and do's/don'ts in the `copilot-guideline.md` to improve Copilot’s output quality.

---

## Caveats

* CSS spacing, font size, and color values may not be correctly identified. Manual adjustment may be needed.
* Existing component mapping may not work reliably. Full support for this feature is expected in the enterprise version.
* Props may not be automatically inferred in generated components. Manual definition and refactoring might be required.

