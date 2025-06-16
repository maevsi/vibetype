export const fileUpload = `
  mutation ($file: File!, $item_id: ID!, $column_id: String!) {
    add_file_to_column (
      file: $file,
      item_id: $item_id,
      column_id: $column_id
    ) {
      id
    }
  }
`
