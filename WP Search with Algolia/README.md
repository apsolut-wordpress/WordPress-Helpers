## Start
 1. Create Algolia Free Account (can follow sample setup, install samples as it wont block anything)
 2. Install & Activate the plugin: https://wordpress.org/plugins/wp-search-with-algolia/


## Add content to your website 
 1. add content to your Post types (Post, Pages, Movies...)
 2. GOTO: YOURSITE/wp-admin/admin.php?page=algolia-search-page
    1. select Algolia with Instantsearch.js
    1. also RE-INDEX and PUSH SETTINGS



## Enable plugin wp-search-with-algolia
 1. YOURSITE/wp-admin/admin.php?page=algolia-account-settings
 1. add API KEYS from https://www.algolia.com/account/api-keys/all




## Ignoring Custom Post Types
 1. open your theme location YOURSITE/wp-content/themes/YOURTHEME/functions.php
 2. add this code:

    ```// functions.php
    function wds_algolia_exclude_post_types( $post_types ) {

	// Ignore these post types.
	//unset( $post_types['acf-field_group'] );
	//unset( $post_types['testimonials'] );
	
	/**
	* this will exclude custom post type movies
	* you need to go to YOURSITE/wp-admin/admin.php?page=algolia-search-page
	* and click Re-index search page records & Push Settings
	* you can also verify this in algolia: algolia.com/apps/YOUR_APP_ID/dashboard
	* under Top Indices there will be: wp_searchagble_posts, wp_posts_YOUR_CPT, wp_posts_users
	*/
	unset( $post_types['movies'] ); // This will be excluded from Search 

	return $post_types;
    }
    add_filter( 'algolia_searchable_post_types', 'wds_algolia_exclude_post_types' );


## Testing
1. Lets say Twenty Twenty-One theme
1. Go to: YOURSITE/s?=post


## Extra help

1. [Plugin github](https://github.com/WebDevStudios/wp-search-with-algolia)
1. [Plugin WordPress repo](https://wordpress.org/plugins/wp-search-with-algolia/)
1. [Help - Exclude post types or ACF fields](https://webdevstudios.com/2021/02/09/wp-search-with-algolia/#excluding-by-post-type)
1. [Documents - Configuration guide](https://github.com/WebDevStudios/wp-search-with-algolia/wiki/Getting-Started)
1. [ME (apsolut on Twitter)](https://twitter.com/apsolut)


