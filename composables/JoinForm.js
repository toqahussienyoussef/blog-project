// composables/useJoinUsForm.js
import { ref } from 'vue'

export const useJoinUsForm = () => {
    const loading = ref(false)
    const error = ref('')
    const success = ref(false)

    const submitForm = async (formData) => {
        loading.value = true
        error.value = ''
        success.value = false

        try {
            const response = await fetch(`${baseURL()}/join-us`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Submission failed')
            }

            success.value = true
            return data
        } catch (e) {
            error.value = e.message
            throw e
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        error,
        success,
        submitForm
    }
}