// vite.config.ts
import react from "file:///Users/james/Documents/works/2024/jameshsu/recuitpre/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { certificateFor } from "file:///Users/james/Documents/works/2024/jameshsu/recuitpre/node_modules/devcert/dist/index.js";
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///Users/james/Documents/works/2024/jameshsu/recuitpre/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///Users/james/Documents/works/2024/jameshsu/recuitpre/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/james/Documents/works/2024/jameshsu/recuitpre";
var vite_config_default = defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, "./src/pages");
  const { key, cert } = await certificateFor("localhost");
  return {
    base: "./",
    root: resolve(__vite_injected_original_dirname, "src/pages"),
    publicDir: resolve(__vite_injected_original_dirname, "public"),
    build: {
      outDir: resolve(__vite_injected_original_dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: resolve(__vite_injected_original_dirname, "src/pages/index.html")
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          math: "always",
          globalVars: {
            mainColor: "red"
          }
        }
      }
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_TITLE,
            description: env.VITE_SUBSCRIPTION,
            url: env.VITE_URL,
            facebookID: env.VITE_FACEBOOK_ID
          }
        }
      })
    ],
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src")
      }
    },
    server: {
      open: true,
      port: 5173,
      https: { key, cert },
      proxy: {
        "/api": "http://localhost:3000"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFtZXMvRG9jdW1lbnRzL3dvcmtzLzIwMjQvamFtZXNoc3UvcmVjdWl0cHJlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamFtZXMvRG9jdW1lbnRzL3dvcmtzLzIwMjQvamFtZXNoc3UvcmVjdWl0cHJlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYW1lcy9Eb2N1bWVudHMvd29ya3MvMjAyNC9qYW1lc2hzdS9yZWN1aXRwcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgY2VydGlmaWNhdGVGb3IgfSBmcm9tICdkZXZjZXJ0JztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGFzeW5jICh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsICcuL3NyYy9wYWdlcycpO1xuICBjb25zdCB7IGtleSwgY2VydCB9ID0gYXdhaXQgY2VydGlmaWNhdGVGb3IoJ2xvY2FsaG9zdCcpO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZTogJy4vJyxcbiAgICByb290OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcycpLFxuICAgIHB1YmxpY0RpcjogcmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiByZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3QnKSxcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGluZGV4OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9pbmRleC5odG1sJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIGxlc3M6IHtcbiAgICAgICAgICBtYXRoOiAnYWx3YXlzJyxcbiAgICAgICAgICBnbG9iYWxWYXJzOiB7XG4gICAgICAgICAgICBtYWluQ29sb3I6ICdyZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgICAgICBtaW5pZnk6IHRydWUsXG4gICAgICAgIGluamVjdDoge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiBlbnYuVklURV9USVRMRSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbnYuVklURV9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICB1cmw6IGVudi5WSVRFX1VSTCxcbiAgICAgICAgICAgIGZhY2Vib29rSUQ6IGVudi5WSVRFX0ZBQ0VCT09LX0lELFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBwb3J0OiA1MTczLFxuICAgICAgaHR0cHM6IHsga2V5LCBjZXJ0IH0sXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThVLE9BQU8sV0FBVztBQUNoVyxTQUFTLHNCQUFzQjtBQUMvQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxjQUFjLGVBQWU7QUFDdEMsU0FBUyx3QkFBd0I7QUFKakMsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhLE9BQU8sRUFBRSxLQUFLLE1BQU07QUFDOUMsUUFBTSxNQUFNLFFBQVEsTUFBTSxhQUFhO0FBQ3ZDLFFBQU0sRUFBRSxLQUFLLEtBQUssSUFBSSxNQUFNLGVBQWUsV0FBVztBQUV0RCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNLFFBQVEsa0NBQVcsV0FBVztBQUFBLElBQ3BDLFdBQVcsUUFBUSxrQ0FBVyxRQUFRO0FBQUEsSUFDdEMsT0FBTztBQUFBLE1BQ0wsUUFBUSxRQUFRLGtDQUFXLE1BQU07QUFBQSxNQUNqQyxhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTCxPQUFPLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsUUFDbEQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sWUFBWTtBQUFBLFlBQ1YsV0FBVztBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0osT0FBTyxJQUFJO0FBQUEsWUFDWCxhQUFhLElBQUk7QUFBQSxZQUNqQixLQUFLLElBQUk7QUFBQSxZQUNULFlBQVksSUFBSTtBQUFBLFVBQ2xCO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPLEVBQUUsS0FBSyxLQUFLO0FBQUEsTUFDbkIsT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
