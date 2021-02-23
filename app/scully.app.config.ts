import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'app',
  outDir: './dist/static',
  routes: {
    '/content/:id': {
      type: 'contentFolder',
      id: {
        folder: './content'
      }
    },
  }
};
