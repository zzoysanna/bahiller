import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'app',
  outDir: './dist/static',
  routes: {
    '/hospitals/:id': {
      type: 'contentFolder',
      id: {
        folder: './content/hospitals'
      }
    },
    '/hurts/:id': {
      type: 'contentFolder',
      id: {
        folder: './content/hurts'
      }
    }
  }
};
