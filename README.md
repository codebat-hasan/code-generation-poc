
# Accelerated UI Development from Figma using Builder.io and GitHub Copilot

This guide outlines a semi-automated workflow for rapidly generating and refining frontend code from Figma designs. It combines Builder.io CLI to bootstrap pages and components, with GitHub Copilot acting as a coding assistant to improve, modularize, and align the generated output with your project’s architecture and conventions.


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
3. The CLI will prompt you to choose:

   * Create a new page
   * Update an existing page
   * Create a new component
   * Update an existing component (e.g., `ContentCard`)
4. After generation, the CLI will ask whether you want to:

   * **Accept** the generated code
   * **Refine** the code with changes
   * **Revert** the changes
5. If you choose **Refine**, you'll be prompted to describe what to improve. The CLI will regenerate the code accordingly.

---

## 6. Integrate with Coding Agent (GitHub Copilot)

Builder.io gives you a fast start, but GitHub Copilot can help bring the generated code up to production standards.

### Setup

1. Install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) in Visual Studio Code.
2. Create a file named `.github/copilot-guideline.md` in your project.

This file helps Copilot understand your architectural and stylistic expectations when generating or refactoring code.

### Example Use Cases

* **Fix Design Inconsistencies:** Adjust layout, spacing, or visual mismatches in generated UI.
* **Refactor into Modular Components:** Break down large components into smaller, reusable parts.
* **Apply Project Conventions:** Ensure Tailwind, BEM, JSDoc, accessibility, and folder structure standards are followed.

> 💡 **Tip:** Include sample components, code patterns, and naming conventions in the `copilot-guideline.md` file to guide Copilot's behavior.

---

## Caveats

* Builder.io-generated CSS (spacing, font sizes, colors) may need manual adjustment.
* Mapping to existing components may not work perfectly; more reliable in the enterprise version.
* Component props may not be correctly inferred — review and refactor where needed.
* AI refinement works best when prompt context is detailed and grounded in project conventions.

