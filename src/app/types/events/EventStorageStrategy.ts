import type { EventFormType } from '~/types/events/eventForm'
export interface EventStorageStrategy {
  saveEvent(form: EventFormType): Promise<void>
}
