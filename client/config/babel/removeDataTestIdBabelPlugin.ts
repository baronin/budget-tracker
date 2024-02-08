import { PluginItem } from '@babel/core';

export default function removeDataTestIdBabelPlugin(): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const forbiddenProps = state.opts.props || [];
        path.traverse({
          JSXIdentifier(path) {
            if (forbiddenProps.includes(path.node.name)) {
              path.parentPath.remove();
            }
          },
        });
      }
    }
  }
}
