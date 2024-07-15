export const truncatedName = (str: string, length: number): string =>
  str.length > 15 ? `${str.substring(0, length)}...` : str;
export const getYoutubeVideoId = (
  webcastUrl: string | undefined,
): string | null => {
  if (!webcastUrl) return null;

  try {
    const url = new URL(webcastUrl);
    return url.searchParams.get("v");
  } catch (error) {
    console.error("Error parsing webcast URL:", error);
    return null;
  }
};
