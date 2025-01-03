import { ref, computed } from 'vue'
import { useFetch } from '#app'

export const usePosts = () => {
  const posts = ref([])
  const page = ref(1)
  const hasMore = ref(true)
  const total = ref(0)

  const visiblePosts = computed(() =>
    posts.value.filter(p => p.isActive).length
  )

  const fetchPosts = async ({ done }) => {
    if (!hasMore.value) {
      done('empty')
      return
    }

    const { data, error } = await useFetch(`${baseURL()}/posts`, {
      params: { page: page.value },
      transform: (response) => ({
        items: response.data?.map(post => ({ ...post, isActive: false })),
        hasMore: !!response.next_page_url,
        total: response.total
      })
    })

    if (error.value) {
      done('error')
      return
    }

    if (data.value?.items?.length) {
      posts.value.push(...data.value.items)
      hasMore.value = data.value.hasMore
      total.value = data.value.total
      page.value++
      done(hasMore.value ? 'ok' : 'empty')
    } else {
      hasMore.value = false
      done('empty')
    }
  }

  return {
    posts,
    total,
    fetchPosts,
    visiblePosts
  }
}