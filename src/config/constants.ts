export class Constants {
    public static readonly SUCCESS_CODE = 200;
    public static readonly ERROR_CODE = 400;
    public static readonly INTERNAL_SERVER_ERROR_CODE = 500;
    public static readonly IMAIGE_ROOT_FOLDER = "Post_Images";
    public static readonly HASH_MAX_LIMIT = 12;
    public static readonly TOKEN_PREFIX = "Bearer ";
    public static readonly DEFAULT_PAGE = 1;
    public static readonly DEFAULT_LIMITS = 10;
    public static readonly IMAGES_EXTENTIONS = [".jpeg", ".jpg", ".png", ".gif"];
    
    public static readonly DB_DEFAULTS = {
        CHARSET: "utf8mb4",
        COLLATION: "utf8mb4_unicode_ci",
    };
}
