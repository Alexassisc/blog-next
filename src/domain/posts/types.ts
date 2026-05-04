export type PostID = number;

export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type Cover = {
  id: PostID;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: string | null;
  width: number;
  height: number;

  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  };

  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;

  provider_metadata: {
    public_id: string;
    resource_type: string;
  };

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Post = {
  id: PostID;
  documentId: string;
  title: string;
  slug: string;
  content: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  cover?: Cover | null;

  author?: Author;
  category?: Category;
};

export type PostsResponse = {
  data: Post[];
};

export type Author = {
  id: PostID;
  documentId: string;
  name: string;
};

export type Category = {
  id: PostID;
  documentId: string;
  name: string;
  slug: string;
};
