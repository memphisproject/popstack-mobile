import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** An object with globally unique ID */
export type Node = {
  /** A globally unique identifier */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "collections" */
export type Collections = Node & {
  __typename?: 'collections';
  /** An object relationship */
  collections_tile?: Maybe<Collections_Tiles>;
  /** An array relationship */
  collections_tiles: Array<Collections_Tiles>;
  /** An aggregate relationship */
  collections_tiles_aggregate: Collections_Tiles_Aggregate;
  /** fetch data from the table: "collections_tiles" */
  collections_tiles_connection: Collections_TilesConnection;
  created_at: Scalars['timestamptz'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users_collections: Array<Users_Collections>;
  /** An aggregate relationship */
  users_collections_aggregate: Users_Collections_Aggregate;
  /** An array relationship connection */
  users_collections_connection: Users_CollectionsConnection;
};

/** columns and relationships of "collections" */
export type CollectionsCollections_TilesArgs = {
  distinct_on?: InputMaybe<Array<Collections_Tiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Tiles_Order_By>>;
  where?: InputMaybe<Collections_Tiles_Bool_Exp>;
};

/** columns and relationships of "collections" */
export type CollectionsCollections_Tiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Tiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Tiles_Order_By>>;
  where?: InputMaybe<Collections_Tiles_Bool_Exp>;
};

/** columns and relationships of "collections" */
export type CollectionsCollections_Tiles_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Collections_Tiles_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Tiles_Order_By>>;
  where?: InputMaybe<Collections_Tiles_Bool_Exp>;
};

/** columns and relationships of "collections" */
export type CollectionsUsers_CollectionsArgs = {
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** columns and relationships of "collections" */
export type CollectionsUsers_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** columns and relationships of "collections" */
export type CollectionsUsers_Collections_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** A Relay connection object on "collections" */
export type CollectionsConnection = {
  __typename?: 'collectionsConnection';
  edges: Array<CollectionsEdge>;
  pageInfo: PageInfo;
};

export type CollectionsEdge = {
  __typename?: 'collectionsEdge';
  cursor: Scalars['String'];
  node: Collections;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  _and?: InputMaybe<Array<Collections_Bool_Exp>>;
  _not?: InputMaybe<Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Collections_Bool_Exp>>;
  collections_tile?: InputMaybe<Collections_Tiles_Bool_Exp>;
  collections_tiles?: InputMaybe<Collections_Tiles_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_collections?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** unique or primary key constraints on table "collections" */
export type Collections_Constraint =
  /** unique or primary key constraint */
  'collections_pkey';

/** input type for inserting data into table "collections" */
export type Collections_Insert_Input = {
  collections_tile?: InputMaybe<Collections_Tiles_Obj_Rel_Insert_Input>;
  collections_tiles?: InputMaybe<Collections_Tiles_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  users_collections?: InputMaybe<Users_Collections_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "collections" */
export type Collections_Mutation_Response = {
  __typename?: 'collections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collections>;
};

/** input type for inserting object relation for remote table "collections" */
export type Collections_Obj_Rel_Insert_Input = {
  data: Collections_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};

/** on conflict condition type for table "collections" */
export type Collections_On_Conflict = {
  constraint: Collections_Constraint;
  update_columns?: Array<Collections_Update_Column>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
  collections_tile?: InputMaybe<Collections_Tiles_Order_By>;
  collections_tiles_aggregate?: InputMaybe<Collections_Tiles_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_collections_aggregate?: InputMaybe<Users_Collections_Aggregate_Order_By>;
};

/** primary key columns input for table: collections */
export type Collections_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collections" */
export type Collections_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "collections" */
export type Collections_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "collections_tiles" */
export type Collections_Tiles = Node & {
  __typename?: 'collections_tiles';
  /** An object relationship */
  collection: Collections;
  collection_fk: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['ID'];
  order: Scalars['Int'];
  /** An object relationship */
  tile: Tiles;
  tile_fk: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** A Relay connection object on "collections_tiles" */
export type Collections_TilesConnection = {
  __typename?: 'collections_tilesConnection';
  edges: Array<Collections_TilesEdge>;
  pageInfo: PageInfo;
};

export type Collections_TilesEdge = {
  __typename?: 'collections_tilesEdge';
  cursor: Scalars['String'];
  node: Collections_Tiles;
};

/** aggregated selection of "collections_tiles" */
export type Collections_Tiles_Aggregate = {
  __typename?: 'collections_tiles_aggregate';
  aggregate?: Maybe<Collections_Tiles_Aggregate_Fields>;
  nodes: Array<Collections_Tiles>;
};

/** aggregate fields of "collections_tiles" */
export type Collections_Tiles_Aggregate_Fields = {
  __typename?: 'collections_tiles_aggregate_fields';
  avg?: Maybe<Collections_Tiles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Collections_Tiles_Max_Fields>;
  min?: Maybe<Collections_Tiles_Min_Fields>;
  stddev?: Maybe<Collections_Tiles_Stddev_Fields>;
  stddev_pop?: Maybe<Collections_Tiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Collections_Tiles_Stddev_Samp_Fields>;
  sum?: Maybe<Collections_Tiles_Sum_Fields>;
  var_pop?: Maybe<Collections_Tiles_Var_Pop_Fields>;
  var_samp?: Maybe<Collections_Tiles_Var_Samp_Fields>;
  variance?: Maybe<Collections_Tiles_Variance_Fields>;
};

/** aggregate fields of "collections_tiles" */
export type Collections_Tiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collections_Tiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collections_tiles" */
export type Collections_Tiles_Aggregate_Order_By = {
  avg?: InputMaybe<Collections_Tiles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Collections_Tiles_Max_Order_By>;
  min?: InputMaybe<Collections_Tiles_Min_Order_By>;
  stddev?: InputMaybe<Collections_Tiles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Collections_Tiles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Collections_Tiles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Collections_Tiles_Sum_Order_By>;
  var_pop?: InputMaybe<Collections_Tiles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Collections_Tiles_Var_Samp_Order_By>;
  variance?: InputMaybe<Collections_Tiles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "collections_tiles" */
export type Collections_Tiles_Arr_Rel_Insert_Input = {
  data: Array<Collections_Tiles_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Collections_Tiles_On_Conflict>;
};

/** aggregate avg on columns */
export type Collections_Tiles_Avg_Fields = {
  __typename?: 'collections_tiles_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "collections_tiles" */
export type Collections_Tiles_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "collections_tiles". All fields are combined with a logical 'AND'. */
export type Collections_Tiles_Bool_Exp = {
  _and?: InputMaybe<Array<Collections_Tiles_Bool_Exp>>;
  _not?: InputMaybe<Collections_Tiles_Bool_Exp>;
  _or?: InputMaybe<Array<Collections_Tiles_Bool_Exp>>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  collection_fk?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  tile?: InputMaybe<Tiles_Bool_Exp>;
  tile_fk?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "collections_tiles" */
export type Collections_Tiles_Constraint =
  /** unique or primary key constraint */
  | 'collections_tiles_pkey'
  /** unique or primary key constraint */
  | 'collections_tiles_tile_fk_key';

/** input type for incrementing numeric columns in table "collections_tiles" */
export type Collections_Tiles_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "collections_tiles" */
export type Collections_Tiles_Insert_Input = {
  collection?: InputMaybe<Collections_Obj_Rel_Insert_Input>;
  collection_fk?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  tile?: InputMaybe<Tiles_Obj_Rel_Insert_Input>;
  tile_fk?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Collections_Tiles_Max_Fields = {
  __typename?: 'collections_tiles_max_fields';
  collection_fk?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  tile_fk?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "collections_tiles" */
export type Collections_Tiles_Max_Order_By = {
  collection_fk?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  tile_fk?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Collections_Tiles_Min_Fields = {
  __typename?: 'collections_tiles_min_fields';
  collection_fk?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  tile_fk?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "collections_tiles" */
export type Collections_Tiles_Min_Order_By = {
  collection_fk?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  tile_fk?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "collections_tiles" */
export type Collections_Tiles_Mutation_Response = {
  __typename?: 'collections_tiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collections_Tiles>;
};

/** input type for inserting object relation for remote table "collections_tiles" */
export type Collections_Tiles_Obj_Rel_Insert_Input = {
  data: Collections_Tiles_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Collections_Tiles_On_Conflict>;
};

/** on conflict condition type for table "collections_tiles" */
export type Collections_Tiles_On_Conflict = {
  constraint: Collections_Tiles_Constraint;
  update_columns?: Array<Collections_Tiles_Update_Column>;
  where?: InputMaybe<Collections_Tiles_Bool_Exp>;
};

/** Ordering options when selecting data from "collections_tiles". */
export type Collections_Tiles_Order_By = {
  collection?: InputMaybe<Collections_Order_By>;
  collection_fk?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  tile?: InputMaybe<Tiles_Order_By>;
  tile_fk?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collections_tiles */
export type Collections_Tiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collections_tiles" */
export type Collections_Tiles_Select_Column =
  /** column name */
  | 'collection_fk'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'order'
  /** column name */
  | 'tile_fk'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "collections_tiles" */
export type Collections_Tiles_Set_Input = {
  collection_fk?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  tile_fk?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Collections_Tiles_Stddev_Fields = {
  __typename?: 'collections_tiles_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "collections_tiles" */
export type Collections_Tiles_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Collections_Tiles_Stddev_Pop_Fields = {
  __typename?: 'collections_tiles_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "collections_tiles" */
export type Collections_Tiles_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Collections_Tiles_Stddev_Samp_Fields = {
  __typename?: 'collections_tiles_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "collections_tiles" */
export type Collections_Tiles_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Collections_Tiles_Sum_Fields = {
  __typename?: 'collections_tiles_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "collections_tiles" */
export type Collections_Tiles_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "collections_tiles" */
export type Collections_Tiles_Update_Column =
  /** column name */
  | 'collection_fk'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'order'
  /** column name */
  | 'tile_fk'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
export type Collections_Tiles_Var_Pop_Fields = {
  __typename?: 'collections_tiles_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "collections_tiles" */
export type Collections_Tiles_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Collections_Tiles_Var_Samp_Fields = {
  __typename?: 'collections_tiles_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "collections_tiles" */
export type Collections_Tiles_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Collections_Tiles_Variance_Fields = {
  __typename?: 'collections_tiles_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "collections_tiles" */
export type Collections_Tiles_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "collections" */
export type Collections_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "collections" */
  delete_collections?: Maybe<Collections_Mutation_Response>;
  /** delete single row from the table: "collections" */
  delete_collections_by_pk?: Maybe<Collections>;
  /** delete data from the table: "collections_tiles" */
  delete_collections_tiles?: Maybe<Collections_Tiles_Mutation_Response>;
  /** delete single row from the table: "collections_tiles" */
  delete_collections_tiles_by_pk?: Maybe<Collections_Tiles>;
  /** delete data from the table: "tiles" */
  delete_tiles?: Maybe<Tiles_Mutation_Response>;
  /** delete single row from the table: "tiles" */
  delete_tiles_by_pk?: Maybe<Tiles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_collections" */
  delete_users_collections?: Maybe<Users_Collections_Mutation_Response>;
  /** delete single row from the table: "users_collections" */
  delete_users_collections_by_pk?: Maybe<Users_Collections>;
  /** insert data into the table: "collections" */
  insert_collections?: Maybe<Collections_Mutation_Response>;
  /** insert a single row into the table: "collections" */
  insert_collections_one?: Maybe<Collections>;
  /** insert data into the table: "collections_tiles" */
  insert_collections_tiles?: Maybe<Collections_Tiles_Mutation_Response>;
  /** insert a single row into the table: "collections_tiles" */
  insert_collections_tiles_one?: Maybe<Collections_Tiles>;
  /** insert data into the table: "tiles" */
  insert_tiles?: Maybe<Tiles_Mutation_Response>;
  /** insert a single row into the table: "tiles" */
  insert_tiles_one?: Maybe<Tiles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_collections" */
  insert_users_collections?: Maybe<Users_Collections_Mutation_Response>;
  /** insert a single row into the table: "users_collections" */
  insert_users_collections_one?: Maybe<Users_Collections>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "collections" */
  update_collections?: Maybe<Collections_Mutation_Response>;
  /** update single row of the table: "collections" */
  update_collections_by_pk?: Maybe<Collections>;
  /** update data of the table: "collections_tiles" */
  update_collections_tiles?: Maybe<Collections_Tiles_Mutation_Response>;
  /** update single row of the table: "collections_tiles" */
  update_collections_tiles_by_pk?: Maybe<Collections_Tiles>;
  /** update data of the table: "tiles" */
  update_tiles?: Maybe<Tiles_Mutation_Response>;
  /** update single row of the table: "tiles" */
  update_tiles_by_pk?: Maybe<Tiles>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "users_collections" */
  update_users_collections?: Maybe<Users_Collections_Mutation_Response>;
  /** update single row of the table: "users_collections" */
  update_users_collections_by_pk?: Maybe<Users_Collections>;
};

/** mutation root */
export type Mutation_RootDelete_CollectionsArgs = {
  where: Collections_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Collections_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Collections_TilesArgs = {
  where: Collections_Tiles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Collections_Tiles_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_TilesArgs = {
  where: Tiles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tiles_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Users_CollectionsArgs = {
  where: Users_Collections_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_Collections_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_CollectionsArgs = {
  objects: Array<Collections_Insert_Input>;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Collections_OneArgs = {
  object: Collections_Insert_Input;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Collections_TilesArgs = {
  objects: Array<Collections_Tiles_Insert_Input>;
  on_conflict?: InputMaybe<Collections_Tiles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Collections_Tiles_OneArgs = {
  object: Collections_Tiles_Insert_Input;
  on_conflict?: InputMaybe<Collections_Tiles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TilesArgs = {
  objects: Array<Tiles_Insert_Input>;
  on_conflict?: InputMaybe<Tiles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tiles_OneArgs = {
  object: Tiles_Insert_Input;
  on_conflict?: InputMaybe<Tiles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_CollectionsArgs = {
  objects: Array<Users_Collections_Insert_Input>;
  on_conflict?: InputMaybe<Users_Collections_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_Collections_OneArgs = {
  object: Users_Collections_Insert_Input;
  on_conflict?: InputMaybe<Users_Collections_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CollectionsArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  where: Collections_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Collections_By_PkArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  pk_columns: Collections_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Collections_TilesArgs = {
  _inc?: InputMaybe<Collections_Tiles_Inc_Input>;
  _set?: InputMaybe<Collections_Tiles_Set_Input>;
  where: Collections_Tiles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Collections_Tiles_By_PkArgs = {
  _inc?: InputMaybe<Collections_Tiles_Inc_Input>;
  _set?: InputMaybe<Collections_Tiles_Set_Input>;
  pk_columns: Collections_Tiles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TilesArgs = {
  _set?: InputMaybe<Tiles_Set_Input>;
  where: Tiles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tiles_By_PkArgs = {
  _set?: InputMaybe<Tiles_Set_Input>;
  pk_columns: Tiles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_CollectionsArgs = {
  _inc?: InputMaybe<Users_Collections_Inc_Input>;
  _set?: InputMaybe<Users_Collections_Set_Input>;
  where: Users_Collections_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_Collections_By_PkArgs = {
  _inc?: InputMaybe<Users_Collections_Inc_Input>;
  _set?: InputMaybe<Users_Collections_Set_Input>;
  pk_columns: Users_Collections_Pk_Columns_Input;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "collections" */
  collections_connection: CollectionsConnection;
  /** fetch data from the table: "collections_tiles" */
  collections_tiles_connection: Collections_TilesConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "tiles" */
  tiles_connection: TilesConnection;
  /** An array relationship connection */
  users_collections_connection: Users_CollectionsConnection;
  /** fetch data from the table: "users" */
  users_connection: UsersConnection;
};

export type Query_RootCollections_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

export type Query_RootCollections_Tiles_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Collections_Tiles_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Tiles_Order_By>>;
  where?: InputMaybe<Collections_Tiles_Bool_Exp>;
};

export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};

export type Query_RootTiles_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Tiles_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tiles_Order_By>>;
  where?: InputMaybe<Tiles_Bool_Exp>;
};

export type Query_RootUsers_Collections_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

export type Query_RootUsers_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "collections" */
  collections_connection: CollectionsConnection;
  /** fetch data from the table: "collections_tiles" */
  collections_tiles_connection: Collections_TilesConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "tiles" */
  tiles_connection: TilesConnection;
  /** An array relationship connection */
  users_collections_connection: Users_CollectionsConnection;
  /** fetch data from the table: "users" */
  users_connection: UsersConnection;
};

export type Subscription_RootCollections_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

export type Subscription_RootCollections_Tiles_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Collections_Tiles_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Tiles_Order_By>>;
  where?: InputMaybe<Collections_Tiles_Bool_Exp>;
};

export type Subscription_RootNodeArgs = {
  id: Scalars['ID'];
};

export type Subscription_RootTiles_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Tiles_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tiles_Order_By>>;
  where?: InputMaybe<Tiles_Bool_Exp>;
};

export type Subscription_RootUsers_Collections_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

export type Subscription_RootUsers_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "tiles" */
export type Tiles = Node & {
  __typename?: 'tiles';
  /** An object relationship */
  collections_tile?: Maybe<Collections_Tiles>;
  content: Scalars['json'];
  created_at: Scalars['timestamptz'];
  id: Scalars['ID'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "tiles" */
export type TilesContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** A Relay connection object on "tiles" */
export type TilesConnection = {
  __typename?: 'tilesConnection';
  edges: Array<TilesEdge>;
  pageInfo: PageInfo;
};

export type TilesEdge = {
  __typename?: 'tilesEdge';
  cursor: Scalars['String'];
  node: Tiles;
};

/** Boolean expression to filter rows from the table "tiles". All fields are combined with a logical 'AND'. */
export type Tiles_Bool_Exp = {
  _and?: InputMaybe<Array<Tiles_Bool_Exp>>;
  _not?: InputMaybe<Tiles_Bool_Exp>;
  _or?: InputMaybe<Array<Tiles_Bool_Exp>>;
  collections_tile?: InputMaybe<Collections_Tiles_Bool_Exp>;
  content?: InputMaybe<Json_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tiles" */
export type Tiles_Constraint =
  /** unique or primary key constraint */
  'tiles_pkey';

/** input type for inserting data into table "tiles" */
export type Tiles_Insert_Input = {
  collections_tile?: InputMaybe<Collections_Tiles_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tiles" */
export type Tiles_Mutation_Response = {
  __typename?: 'tiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tiles>;
};

/** input type for inserting object relation for remote table "tiles" */
export type Tiles_Obj_Rel_Insert_Input = {
  data: Tiles_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Tiles_On_Conflict>;
};

/** on conflict condition type for table "tiles" */
export type Tiles_On_Conflict = {
  constraint: Tiles_Constraint;
  update_columns?: Array<Tiles_Update_Column>;
  where?: InputMaybe<Tiles_Bool_Exp>;
};

/** Ordering options when selecting data from "tiles". */
export type Tiles_Order_By = {
  collections_tile?: InputMaybe<Collections_Tiles_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tiles */
export type Tiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tiles" */
export type Tiles_Select_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "tiles" */
export type Tiles_Set_Input = {
  content?: InputMaybe<Scalars['json']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "tiles" */
export type Tiles_Update_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at';

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = Node & {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['ID'];
  mail: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users_collections: Array<Users_Collections>;
  /** An aggregate relationship */
  users_collections_aggregate: Users_Collections_Aggregate;
  /** An array relationship connection */
  users_collections_connection: Users_CollectionsConnection;
};

/** columns and relationships of "users" */
export type UsersUsers_CollectionsArgs = {
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUsers_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUsers_Collections_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Users_Collections_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Collections_Order_By>>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** A Relay connection object on "users" */
export type UsersConnection = {
  __typename?: 'usersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersEdge = {
  __typename?: 'usersEdge';
  cursor: Scalars['String'];
  node: Users;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mail?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_collections?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** columns and relationships of "users_collections" */
export type Users_Collections = Node & {
  __typename?: 'users_collections';
  /** An object relationship */
  collection: Collections;
  collection_fk: Scalars['uuid'];
  id: Scalars['ID'];
  is_pinned: Scalars['Boolean'];
  order: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_fk: Scalars['uuid'];
};

/** A Relay connection object on "users_collections" */
export type Users_CollectionsConnection = {
  __typename?: 'users_collectionsConnection';
  edges: Array<Users_CollectionsEdge>;
  pageInfo: PageInfo;
};

export type Users_CollectionsEdge = {
  __typename?: 'users_collectionsEdge';
  cursor: Scalars['String'];
  node: Users_Collections;
};

/** aggregated selection of "users_collections" */
export type Users_Collections_Aggregate = {
  __typename?: 'users_collections_aggregate';
  aggregate?: Maybe<Users_Collections_Aggregate_Fields>;
  nodes: Array<Users_Collections>;
};

/** aggregate fields of "users_collections" */
export type Users_Collections_Aggregate_Fields = {
  __typename?: 'users_collections_aggregate_fields';
  avg?: Maybe<Users_Collections_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Collections_Max_Fields>;
  min?: Maybe<Users_Collections_Min_Fields>;
  stddev?: Maybe<Users_Collections_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Collections_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Collections_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Collections_Sum_Fields>;
  var_pop?: Maybe<Users_Collections_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Collections_Var_Samp_Fields>;
  variance?: Maybe<Users_Collections_Variance_Fields>;
};

/** aggregate fields of "users_collections" */
export type Users_Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users_collections" */
export type Users_Collections_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Collections_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Collections_Max_Order_By>;
  min?: InputMaybe<Users_Collections_Min_Order_By>;
  stddev?: InputMaybe<Users_Collections_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Collections_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Collections_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Collections_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Collections_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Collections_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Collections_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users_collections" */
export type Users_Collections_Arr_Rel_Insert_Input = {
  data: Array<Users_Collections_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_Collections_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Collections_Avg_Fields = {
  __typename?: 'users_collections_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users_collections" */
export type Users_Collections_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_collections". All fields are combined with a logical 'AND'. */
export type Users_Collections_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Collections_Bool_Exp>>;
  _not?: InputMaybe<Users_Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Collections_Bool_Exp>>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  collection_fk?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_pinned?: InputMaybe<Boolean_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_fk?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_collections" */
export type Users_Collections_Constraint =
  /** unique or primary key constraint */
  | 'users_collection_pkey'
  /** unique or primary key constraint */
  | 'users_collections_collection_fk_key';

/** input type for incrementing numeric columns in table "users_collections" */
export type Users_Collections_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users_collections" */
export type Users_Collections_Insert_Input = {
  collection?: InputMaybe<Collections_Obj_Rel_Insert_Input>;
  collection_fk?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_pinned?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_fk?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Collections_Max_Fields = {
  __typename?: 'users_collections_max_fields';
  collection_fk?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  user_fk?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "users_collections" */
export type Users_Collections_Max_Order_By = {
  collection_fk?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  user_fk?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Collections_Min_Fields = {
  __typename?: 'users_collections_min_fields';
  collection_fk?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  user_fk?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "users_collections" */
export type Users_Collections_Min_Order_By = {
  collection_fk?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  user_fk?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_collections" */
export type Users_Collections_Mutation_Response = {
  __typename?: 'users_collections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Collections>;
};

/** on conflict condition type for table "users_collections" */
export type Users_Collections_On_Conflict = {
  constraint: Users_Collections_Constraint;
  update_columns?: Array<Users_Collections_Update_Column>;
  where?: InputMaybe<Users_Collections_Bool_Exp>;
};

/** Ordering options when selecting data from "users_collections". */
export type Users_Collections_Order_By = {
  collection?: InputMaybe<Collections_Order_By>;
  collection_fk?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_pinned?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_fk?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_collections */
export type Users_Collections_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_collections" */
export type Users_Collections_Select_Column =
  /** column name */
  | 'collection_fk'
  /** column name */
  | 'id'
  /** column name */
  | 'is_pinned'
  /** column name */
  | 'order'
  /** column name */
  | 'user_fk';

/** input type for updating data in table "users_collections" */
export type Users_Collections_Set_Input = {
  collection_fk?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_pinned?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  user_fk?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Users_Collections_Stddev_Fields = {
  __typename?: 'users_collections_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users_collections" */
export type Users_Collections_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Collections_Stddev_Pop_Fields = {
  __typename?: 'users_collections_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users_collections" */
export type Users_Collections_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Collections_Stddev_Samp_Fields = {
  __typename?: 'users_collections_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users_collections" */
export type Users_Collections_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Collections_Sum_Fields = {
  __typename?: 'users_collections_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users_collections" */
export type Users_Collections_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "users_collections" */
export type Users_Collections_Update_Column =
  /** column name */
  | 'collection_fk'
  /** column name */
  | 'id'
  /** column name */
  | 'is_pinned'
  /** column name */
  | 'order'
  /** column name */
  | 'user_fk';

/** aggregate var_pop on columns */
export type Users_Collections_Var_Pop_Fields = {
  __typename?: 'users_collections_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users_collections" */
export type Users_Collections_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Collections_Var_Samp_Fields = {
  __typename?: 'users_collections_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users_collections" */
export type Users_Collections_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Collections_Variance_Fields = {
  __typename?: 'users_collections_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users_collections" */
export type Users_Collections_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint */
  | 'users_mail_key'
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  users_collections?: InputMaybe<Users_Collections_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_collections_aggregate?: InputMaybe<Users_Collections_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'mail'
  /** column name */
  | 'name'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'mail'
  /** column name */
  | 'name'
  /** column name */
  | 'updated_at';

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
