// eslint-disable
// this is an auto generated file. This will be overwritten

export const getInvite = `query GetInvite($id: ID!) {
  getInvite(id: $id) {
    id
    name
    event
    confirmed
  }
}
`;
export const listInvites = `query ListInvites(
  $filter: ModelInviteFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      event
      confirmed
    }
    nextToken
  }
}
`;
