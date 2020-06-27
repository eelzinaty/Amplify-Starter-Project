/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodoItems = /* GraphQL */ `
  mutation CreateTodoItems(
    $input: CreateTodoItemsInput!
    $condition: ModelTodoItemsConditionInput
  ) {
    createTodoItems(input: $input, condition: $condition) {
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
export const updateTodoItems = /* GraphQL */ `
  mutation UpdateTodoItems(
    $input: UpdateTodoItemsInput!
    $condition: ModelTodoItemsConditionInput
  ) {
    updateTodoItems(input: $input, condition: $condition) {
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
export const deleteTodoItems = /* GraphQL */ `
  mutation DeleteTodoItems(
    $input: DeleteTodoItemsInput!
    $condition: ModelTodoItemsConditionInput
  ) {
    deleteTodoItems(input: $input, condition: $condition) {
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
