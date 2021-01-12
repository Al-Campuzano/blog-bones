import gql from 'graphql-tag'

export default gql`
mutation CreateMicropost($content: String!, $user: String!) {
  createMicropost(input : {postRequest: {content: $content, user: $user}})
  {
    micropost {
      id,
      content,
      user {
        id,
        name
      }
    }
  }
}
`;
