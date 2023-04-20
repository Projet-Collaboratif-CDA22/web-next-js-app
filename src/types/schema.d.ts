import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  UIDAttribute,
  RichTextAttribute,
  MediaAttribute,
  CustomField,
  IntegerAttribute,
  ComponentAttribute,
  DecimalAttribute,
  SetMinMax,
  TextAttribute,
  ComponentSchema,
} from "@strapi/strapi";

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: "Permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: JSONAttribute & DefaultTo<{}>;
    conditions: JSONAttribute & DefaultTo<[]>;
    role: RelationAttribute<"admin::permission", "manyToOne", "admin::role">;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: "User";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    username: StringAttribute;
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    registrationToken: StringAttribute & PrivateAttribute;
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    roles: RelationAttribute<"admin::user", "manyToMany", "admin::role"> &
      PrivateAttribute;
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    preferedLanguage: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> &
      PrivateAttribute;
    updatedBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> &
      PrivateAttribute;
  };
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: "Role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute;
    users: RelationAttribute<"admin::role", "manyToMany", "admin::user">;
    permissions: RelationAttribute<
      "admin::role",
      "oneToMany",
      "admin::permission"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> &
      PrivateAttribute;
    updatedBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> &
      PrivateAttribute;
  };
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: "Api Token";
    singularName: "api-token";
    pluralName: "api-tokens";
    displayName: "Api Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<"">;
    type: EnumerationAttribute<["read-only", "full-access", "custom"]> &
      RequiredAttribute &
      DefaultTo<"read-only">;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      "admin::api-token",
      "oneToMany",
      "admin::api-token-permission"
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: "API Token Permission";
    description: "";
    singularName: "api-token-permission";
    pluralName: "api-token-permissions";
    displayName: "API Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      "admin::api-token-permission",
      "manyToOne",
      "admin::api-token"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferToken extends CollectionTypeSchema {
  info: {
    name: "Transfer Token";
    singularName: "transfer-token";
    pluralName: "transfer-tokens";
    displayName: "Transfer Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<"">;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      "admin::transfer-token",
      "oneToMany",
      "admin::transfer-token-permission"
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferTokenPermission extends CollectionTypeSchema {
  info: {
    name: "Transfer Token Permission";
    description: "";
    singularName: "transfer-token-permission";
    pluralName: "transfer-token-permissions";
    displayName: "Transfer Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      "admin::transfer-token-permission",
      "manyToOne",
      "admin::transfer-token"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
  info: {
    singularName: "category";
    pluralName: "categories";
    displayName: "Category";
    name: "category";
  };
  options: {
    increments: true;
    timestamps: true;
  };
  attributes: {
    name: StringAttribute;
    slug: UIDAttribute<"api::category.category", "name">;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::category.category",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::category.category",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface ApiCourseCourse extends CollectionTypeSchema {
  info: {
    singularName: "course";
    pluralName: "courses";
    displayName: "Course";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 75;
      }>;
    description: RichTextAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 50;
      }>;
    picture: MediaAttribute;
    professor: RelationAttribute<
      "api::course.course",
      "manyToOne",
      "plugin::users-permissions.user"
    >;
    attendees: RelationAttribute<
      "api::course.course",
      "manyToMany",
      "plugin::users-permissions.user"
    >;
    comments: JSONAttribute & CustomField<"plugin::comments.comments">;
    datetime: DateTimeAttribute;
    free_seats: IntegerAttribute;
    is_flagged: BooleanAttribute & DefaultTo<false>;
    is_validated: BooleanAttribute & DefaultTo<false>;
    category: RelationAttribute<
      "api::course.course",
      "oneToOne",
      "api::category.category"
    >;
    nb_attendees: IntegerAttribute;
    duration_min: IntegerAttribute;
    custom_gps_localization: ComponentAttribute<
      "custom.gps-localization",
      true
    >;
    tags: JSONAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "api::course.course",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "api::course.course",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: "file";
    pluralName: "files";
    displayName: "File";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    alternativeText: StringAttribute;
    caption: StringAttribute;
    width: IntegerAttribute;
    height: IntegerAttribute;
    formats: JSONAttribute;
    hash: StringAttribute & RequiredAttribute;
    ext: StringAttribute;
    mime: StringAttribute & RequiredAttribute;
    size: DecimalAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    previewUrl: StringAttribute;
    provider: StringAttribute & RequiredAttribute;
    provider_metadata: JSONAttribute;
    related: RelationAttribute<"plugin::upload.file", "morphToMany">;
    folder: RelationAttribute<
      "plugin::upload.file",
      "manyToOne",
      "plugin::upload.folder"
    > &
      PrivateAttribute;
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: "folder";
    pluralName: "folders";
    displayName: "Folder";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute;
    parent: RelationAttribute<
      "plugin::upload.folder",
      "manyToOne",
      "plugin::upload.folder"
    >;
    children: RelationAttribute<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.folder"
    >;
    files: RelationAttribute<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.file"
    >;
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: "locale";
    pluralName: "locales";
    collectionName: "locales";
    displayName: "Locale";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: StringAttribute & UniqueAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: "permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute & RequiredAttribute;
    role: RelationAttribute<
      "plugin::users-permissions.permission",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: "role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    description: StringAttribute;
    type: StringAttribute & UniqueAttribute;
    permissions: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.permission"
    >;
    users: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.user"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: "user";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: StringAttribute;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    confirmationToken: StringAttribute & PrivateAttribute;
    confirmed: BooleanAttribute & DefaultTo<false>;
    blocked: BooleanAttribute & DefaultTo<false>;
    role: RelationAttribute<
      "plugin::users-permissions.user",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    courses: RelationAttribute<
      "plugin::users-permissions.user",
      "oneToMany",
      "api::course.course"
    >;
    followed_courses: RelationAttribute<
      "plugin::users-permissions.user",
      "manyToMany",
      "api::course.course"
    >;
    name: StringAttribute & RequiredAttribute;
    lastname: StringAttribute & RequiredAttribute;
    pseudo: StringAttribute & RequiredAttribute & UniqueAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginCommentsComment extends CollectionTypeSchema {
  info: {
    tableName: "plugin-comments-comments";
    singularName: "comment";
    pluralName: "comments";
    displayName: "Comment";
    description: "Comment content type";
    kind: "collectionType";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    content: TextAttribute & RequiredAttribute;
    blocked: BooleanAttribute & DefaultTo<false>;
    blockedThread: BooleanAttribute & DefaultTo<false>;
    blockReason: StringAttribute;
    authorUser: RelationAttribute<
      "plugin::comments.comment",
      "oneToOne",
      "plugin::users-permissions.user"
    >;
    authorId: StringAttribute;
    authorName: StringAttribute;
    authorEmail: EmailAttribute;
    authorAvatar: StringAttribute;
    isAdminComment: BooleanAttribute;
    removed: BooleanAttribute;
    approvalStatus: StringAttribute;
    related: StringAttribute;
    reports: RelationAttribute<
      "plugin::comments.comment",
      "oneToMany",
      "plugin::comments.comment-report"
    >;
    threadOf: RelationAttribute<
      "plugin::comments.comment",
      "oneToOne",
      "plugin::comments.comment"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::comments.comment",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::comments.comment",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface PluginCommentsCommentReport extends CollectionTypeSchema {
  info: {
    tableName: "plugin-comments-reports";
    singularName: "comment-report";
    pluralName: "comment-reports";
    displayName: "Reports";
    description: "Reports content type";
    kind: "collectionType";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    content: TextAttribute;
    reason: EnumerationAttribute<["BAD_LANGUAGE", "DISCRIMINATION", "OTHER"]> &
      RequiredAttribute &
      DefaultTo<"OTHER">;
    resolved: BooleanAttribute & DefaultTo<false>;
    related: RelationAttribute<
      "plugin::comments.comment-report",
      "manyToOne",
      "plugin::comments.comment"
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      "plugin::comments.comment-report",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      "plugin::comments.comment-report",
      "oneToOne",
      "admin::user"
    > &
      PrivateAttribute;
  };
}

export interface CustomGpsLocalization extends ComponentSchema {
  info: {
    displayName: "GPS Localization";
    icon: "archway";
    name: "custom_gps_localization";
  };
  attributes: {
    longitude: StringAttribute & RequiredAttribute;
    latitude: StringAttribute & RequiredAttribute;
  };
}

declare global {
  namespace Strapi {
    interface Schemas {
      "admin::permission": AdminPermission;
      "admin::user": AdminUser;
      "admin::role": AdminRole;
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
      "api::category.category": ApiCategoryCategory;
      "api::course.course": ApiCourseCourse;
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "plugin::comments.comment": PluginCommentsComment;
      "plugin::comments.comment-report": PluginCommentsCommentReport;
      "custom.gps-localization": CustomGpsLocalization;
    }
  }
}
