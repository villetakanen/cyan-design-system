```typescript
/**
 * The message to show in the Snackbar, with an optional action. The event listener
 * listens to the `cn-snackbar-add` event to show a new message, and expects the event
 * detail to be an object with the following properties:
 *
 * @property {string} message - The message to show
 * @property {object} action - An optional action to perform when the user clicks the action button,
 *  if not provided, the action button will be hidden
 * @property {string} action.label - The label of the action button
 * @property {function} action.callback - The callback to execute when the action button is clicked
 */
export type SnackbarMessage = {
  message: string
  action?: {
    label: string
    callback: () => void
  }
}

/**
 * @event {CustomEvent} cn-snackbar-add - The Snackbar listens to this event to show a new message.
 * The event detail should be an object with the following properties:
 * - message: the message to show
 * - action: an optional action to perform when the user clicks the action button,
 *   if not provided, the action button will be hidden
 */
```