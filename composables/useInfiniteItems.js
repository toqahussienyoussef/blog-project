import { ref, computed } from '#imports'

export const useInfiniteFetch = (endpoint = '', options = {}) => {
  const {
    transform = (item) => ({ ...item, isActive: false }),
    queryParams = {}
  } = options

  const items = ref([])
  const hasMore = ref(true)
  const currentPage = ref(1)
  const totalItems = ref(0)
  const isLoading = ref(false)
  const fetchError = ref(null)
  const activeItems = computed(() => items.value.filter(item => item.isActive).length)

  const fetchData = async ({ done } = {}) => {
    if (!hasMore.value) {
      done?.('empty')
      return
    }

    isLoading.value = true
    fetchError.value = null

    try {
      const { data, error: responseError } = await useFetch(`${baseURL()}/${endpoint}`, {
        params: {
          page: currentPage.value,
          ...queryParams
        },
        headers: {
          'Accept': 'application/json'
        },
        retry: 1,
        timeout: 5000,

        key: `infinite-fetch-${endpoint}-${currentPage.value}`,
        transform: (response) => ({
          data: response.data?.map(transform) ?? [],
          hasMore: !!response.next_page_url,
          total: response.total
        }),
        default: () => ({
          data: [],
          hasMore: false,
          total: 0
        }),
        cache: true,
        server: true,
      })

      if (responseError.value) {
        throw new Error(responseError.value.message)
      }

      if (data.value) {
        const { data: newItems, hasMore: hasMoreItems, total } = data.value

        if (newItems?.length) {
          items.value.push(...newItems)
          hasMore.value = hasMoreItems
          totalItems.value = total
          currentPage.value++
          done?.('ok')
        } else {
          hasMore.value = false
          done?.('empty')
        }
      }
    } catch (e) {
      fetchError.value = e.message || `An error occurred while fetching ${endpoint}`
      console.error(`Error in useInfiniteFetch:`, e)
      done?.('error')
    } finally {
      isLoading.value = false
    }
  }

  const resetFetch = () => {
    items.value = []
    currentPage.value = 1
    hasMore.value = true
    totalItems.value = 0
    fetchError.value = null
  }

  return {
    items,
    isLoading,
    fetchError,
    hasMore,
    totalItems,
    activeItems,
    currentPage,
    fetchData,
    resetFetch
  }
}