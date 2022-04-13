import { saga_actions_types } from '../types/index'

export const addReminder = (data) => ({
	type: saga_actions_types.REMINDER_ADDED,
	payload: data
});

export const getReminders = () => ({
	type: saga_actions_types.GET_REMINDERS
});

export const completeReminder = (id) => ({
	type: saga_actions_types.REMINDER_COMPLETED,
	payload: id
})

export const updateReminder = (data) => ({
	type: saga_actions_types.REMINDER_UPDATED,
	payload: data
})

export const deleteReminder = (id) => ({
	type: saga_actions_types.REMINDER_DELETE,
	payload: id
})
