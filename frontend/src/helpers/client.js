import { createClient } from '@sanity/client'

const client = createClient({
	projectID: 'zd8t357p',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2026-04-23',
})

export default client
