import type { App } from 'vue'
import { setupPermissionDirective } from './permission'

export function setupGlobDirectives(app: App): void {
  // ๆ้ๆไปค v-auth
  setupPermissionDirective(app)
}
