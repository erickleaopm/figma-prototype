const axios = require("axios")
const crypto = require("crypto")

const clientId = process.env.UNSPLASH_CLIENT_ID

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  // Fetch raw data from Unplash API
  const fetchLatestPhotos = () =>
    axios.get(
      `https://api.unsplash.com/photos?per_page=30&client_id=${clientId}`
    )
  // Await for the results
  const res = await fetchLatestPhotos()

  // Map into these results and create nodes
  res.data.map((photo, index) => {
    //Create your node object
    const photoNode = {
      //Required fields
      id: `${index}`,
      parent: `__SOURCE__`,
      internal: {
        type: `UnsplashLatestPhoto`,
      },
      children: [],
      // Other fields that you want to query with GraphQL
      unsplashId: photo.id,
      created_at: photo.created_at,
      updated_at: photo.updated_at,
      promoted_at: photo.promoted_at,
      description: photo.description,
      alt_description: photo.alt_description,
      width: photo.width,
      height: photo.height,
      urls: {
        raw: photo.urls.raw,
        full: photo.urls.full,
        regular: photo.urls.regular,
        small: photo.urls.small,
        thumb: photo.urls.thumb,
      },
      links: {
        self: photo.links.self,
        html: photo.links.html,
        download: photo.links.download,
        download_location: photo.links.download_location,
      },
      categories: photo.categories,
      likes: photo.likes,
      user: {
        id: photo.user.id,
        username: photo.user.username,
        name: photo.user.name,
        twitter_username: photo.user.twitter_username,
        instagram_username: photo.user.instagram_username,
        portfolio_url: photo.user.portfolio_url,
        bio: photo.user.bio,
        location: photo.user.location,
        link: photo.user.links.html,
        profile_image: {
          small: photo.user.profile_image.small,
          medium: photo.user.profile_image.medium,
          large: photo.user.profile_image.large,
        },
      },
    }

    //Get content digest of note (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(photoNode))
      .digest(`hex`)

    // Add it to photoNode
    photoNode.internal.contentDigest = contentDigest

    // Create node with gatsby createNode() API
    createNode(photoNode)
  })
  return
}
