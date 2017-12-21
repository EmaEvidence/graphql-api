import {
    GraphQLEnumType,
} from 'graphql';

const ContestStatusType = new GraphQLEnumType({
  name: 'ContestStatusType',

  values: {
    DRAFT: { value: 'draft' },
    PUBLISHED: { value: 'published' },
    ARCHIVED: { value: 'archived' }
  }
});

export default ContestStatusType;
