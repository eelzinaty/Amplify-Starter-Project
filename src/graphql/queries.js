/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodoItems = /* GraphQL */ `
  query GetTodoItems($id: ID!) {
    getTodoItems(id: $id) {
      id
      createdAt
      userId
      dueDate
      status
      title
      content
    }
  }
`;
export const listTodoItemss = /* GraphQL */ `
  query ListTodoItemss(
    $filter: ModelTodoItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoItemss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        userId
        dueDate
        status
        title
        content
      }
      nextToken
    }
  }
`;
export const byUserByDate = /* GraphQL */ `
  query ByUserByDate(
    $userId: String
    $dueDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByUserByDate(
      userId: $userId
      dueDate: $dueDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        userId
        dueDate
        status
        title
        content
      }
      nextToken
    }
  }
`;
