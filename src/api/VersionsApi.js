/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       BadInput = require('../model/BadInput'),
       Conflict = require('../model/Conflict'),
       CreateRef = require('../model/CreateRef'),
       CreateVersion = require('../model/CreateVersion'),
       Forbidden = require('../model/Forbidden'),
       Item = require('../model/Item'),
       JsonApiCollection = require('../model/JsonApiCollection'),
       NotFound = require('../model/NotFound'),
       Refs = require('../model/Refs'),
       Version = require('../model/Version'),
       VersionCreated = require('../model/VersionCreated');

  /**
   * Versions service.
   * @module api/VersionsApi
   */

  /**
   * Constructs a new VersionsApi.
   * @alias module:api/VersionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Returns the version with the given &#x60;version_id&#x60;.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * data is of type: {module:model/Version}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersion = function(projectId, versionId, oauth2client, credentials) {
      return(this.getVersion2(projectId, versionId, {}, oauth2client, credentials));
    };

    /**
     * Returns the version with the given &#x60;version_id&#x60;.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * data is of type: {module:model/Version}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersion2 = function(projectId, versionId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getVersion");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling getVersion");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Version;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns a collection of file formats this version could be converted to and downloaded as.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * data is of type: {module:model/Version}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersionDownloadFormats = function(projectId, versionId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getVersionFileFormats");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling getVersionFileFormats");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Version;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/downloadFormats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns a collection of file formats this version could be converted to and downloaded as.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
     * data is of type: {module:model/Version}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersionDownloads = function(projectId, versionId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getVersionDownloads");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling getVersionDownloads");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var keys = Object.keys(opts).filter(function(elt) { return (new RegExp(/^filter\[/).test(elt)); });
      var that = this;
      keys.map (function(elt) {
        queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
        return (elt);
      });
      
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/downloads', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the item the given version is associated with.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * data is of type: {module:model/Item}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersionItem = function(projectId, versionId, oauth2client, credentials) {
      return (this.getVersionItem2(projectId, versionId, {}, oauth2client, credentials));
    };

    /**
     * Returns the item the given version is associated with.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * data is of type: {module:model/Item}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersionItem2 = function(projectId, versionId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getVersionItem");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling getVersionItem");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/item', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
     * data is of type: {module:model/JsonApiCollection}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersionRefs = function(projectId, versionId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getVersionRefs");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling getVersionRefs");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
      };
      var keys = Object.keys(opts).filter(function(elt) { return (new RegExp(/^filter\[/).test(elt)); });
      var that = this;
      keys.map (function(elt) {
        queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
        return (elt);
      });

      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns a collection of links for the given item_id-version_id object.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
     * data is of type: {module:model/JsonApiCollection}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersionRelationshipsLinks = function(projectId, versionId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getVersionRelationshipsLinks");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling getVersionRelationshipsLinks");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var keys = Object.keys(opts).filter(function(elt) { return (new RegExp(/^filter\[/).test(elt)); });
      var that = this;
      keys.map (function(elt) {
        queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
        return (elt);
      });

      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/relationships/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the custom relationships that are associated to the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterRefType filter by `refType`
     * @param {module:model/String} opts.filterDirection filter by the direction of the reference
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
     * data is of type: {module:model/Refs}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getVersionRelationshipsRefs = function(projectId, versionId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getVersionRelationshipsRefs");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling getVersionRelationshipsRefs");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[refType]': this.apiClient.buildCollectionParam(opts['filterRefType'], 'csv'),
        'filter[direction]': opts['filterDirection'],
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
      };
      var keys = Object.keys(opts).filter(function(elt) { return (new RegExp(/^filter\[/).test(elt)); });
      var that = this;
      keys.map (function(elt) {
        queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
        return (elt);
      });

      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Refs;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Creates a new version of an item in the &#39;data&#39; domain service.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateVersion} body describe the version to be created
     * data is of type: {module:model/VersionCreated}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postVersion = function(projectId, body, oauth2client, credentials) {
      return(this.postVersion2(projectId, body, {}, oauth2client, credentials));
    };

    /**
     * Creates a new version of an item in the &#39;data&#39; domain service.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateVersion} body describe the version to be created
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * data is of type: {module:model/VersionCreated}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postVersion2 = function(projectId, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling postVersion");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling postVersion");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = VersionCreated;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Creates a custom relationship between a version and another resource within the &#39;data&#39; domain service (folder, item, or version).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postVersionRelationshipsRef = function(projectId, versionId, body, oauth2client, credentials) {
      return(this.postVersionRelationshipsRef2(projectId, versionId, body, {}, oauth2client, credentials));
    };

    /**
     * Creates a custom relationship between a version and another resource within the &#39;data&#39; domain service (folder, item, or version).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postVersionRelationshipsRef2 = function(projectId, versionId, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling postVersionRelationshipsRef");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling postVersionRelationshipsRef");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling postVersionRelationshipsRef");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Updates the properties of the given version_id object.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.patchVersion = function(projectId, versionId, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling patchVersion");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        return Promise.reject("Missing the required parameter 'versionId' when calling patchVersion");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling patchVersion");
      }

      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

  };

  return exports;
}());
