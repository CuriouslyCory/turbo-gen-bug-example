import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("some-example", {
    description: "Adds a new react component to showcase component examples",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component you're showcasing?",
      },
    ],
    actions: [
      {
        type: "append",
        path: "src/app/page.tsx",
        pattern: /(?<insertion>\/\/ example imports)/g,
        template:
          'import { {{pascalCase name}}Example } from "./examples/{{kabobCase name}}-example";',
      },
      {
        type: "append",
        path: "src/app/page.tsx",
        pattern: /(?<insertion>\{\/\* example components \*\/)\}/g,
        template: "     <{{pascalCase name}}Example />",
      },
    ],
  });
}
