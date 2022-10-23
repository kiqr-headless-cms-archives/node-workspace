import type { ResponseMetaPagination } from '@kiqr/management-api-sdk'
import { Button } from '@kiqr/core'
import { Group } from '../..'

interface PaginationProps {
  pagination: ResponseMetaPagination
  setPage: (pageNo: number) => void
}

export const Pagination = ({ pagination, setPage }: PaginationProps) => {
  const pages = []

  for (let i = 1; i <= pagination.pages; i++) {
    pages.push(i)
  }

  const pageNumbers = pages.map((page) => {
    if (page <= pagination.pages && page > 0) {
      return (
        <Button
          onClick={() => setPage(page)}
          key={page}
          size="xs"
          variant={page === pagination.page ? 'primary' : 'secondary'}
        >
          {page.toString()}
        </Button>
      )
    } else {
      return null
    }
  })

  return (
    <div className="flex justify-center items-center">
      <Group>
        <>{pageNumbers}</>
      </Group>
    </div>
  )
}
