type SEnumType = {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason: null;
};

type SMiniType = {
  kind: string;
  name: string | null;
  ofType: SMiniType | null;
};

type SArgType = {
  name: string;
  description: string;
  type: SMiniType;
  defaultValue: null;
};

type SFieldType = {
  name: string;
  description: string;
  args: SArgType[];
  type: SMiniType;
  isDeprecated: boolean;
  deprecationReason: null;
};

type SType = {
  kind: string;
  name: string;
  description: string;
  fields: SFieldType[] | null;
  inputFields: SArgType[] | null;
  enumValues: SEnumType[] | null;
  interfaces: [] | null;
  possibleTypes: null;
};

export type SchemaType = {
  types: SType[];
  subscriptionType: null;
  mutationType: null;
  queryType: {
    name: string;
  };
  directives: [];
};
