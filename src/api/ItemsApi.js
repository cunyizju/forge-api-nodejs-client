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
       CreateItem = require('../model/CreateItem'),
       CreateRef = require('../model/CreateRef'),
       Folder = require('../model/Folder'),
       Forbidden = require('../model/Forbidden'),
       Item = require('../model/Item'),
       ItemCreated = require('../model/ItemCreated'),
       JsonApiCollection = require('../model/JsonApiCollection'),
       NotFound = require('../model/NotFound'),
       Refs = require('../model/Refs'),
       Version = require('../model/Version'),
       Versions = require('../model/Versions');

  /**
   * Items service.
   * @module api/ItemsApi
   */

  /**
   * Constructs a new ItemsApi.
   * @alias module:api/ItemsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Returns a resource item by ID for any item within a given project. Resource items represent word documents, fusion design files, drawings, spreadsheets, etc.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * data is of type: {module:model/Item}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItem = function(projectId, itemId, oauth2client, credentials) {
      return (this.getItem2(projectId, itemId, {}, oauth2client, credentials));
    };

    /**
     * Returns a resource item by ID for any item within a given project. Resource items represent word documents, fusion design files, drawings, spreadsheets, etc.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Boolean} opts.includePathInProject Specify whether to return pathInProject attribute in response for BIM 360 Docs projects.
     * data is of type: {module:model/Item}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItem2 = function(projectId, itemId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getItem");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling getItem");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
      };
      var queryParams = {
        includePathInProject: opts.includePathInProject
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
        '/data/v1/projects/{project_id}/items/{item_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the \&quot;parent\&quot; folder for the given item.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * data is of type: {module:model/Folder}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItemParentFolder = function(projectId, itemId, oauth2client, credentials) {
      return(this.getItemParentFolder2(projectId, itemId, {}, oauth2client, credentials));
    };

    /**
     * Returns the \&quot;parent\&quot; folder for the given item.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * data is of type: {module:model/Folder}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItemParentFolder2 = function(projectId, itemId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getItemParentFolder");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling getItemParentFolder");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
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
      var returnType = Folder;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/items/{item_id}/parent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;item_id&#x60;. Custom relationships can be established between an item and other resources within the &#39;data&#39; domain service (folders, items, and versions).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
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
    this.getItemRefs = function(projectId, itemId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getItemRefs");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling getItemRefs");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
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
        '/data/v1/projects/{project_id}/items/{item_id}/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the custom relationships that are associated to the given &#x60;item_id&#x60;. Custom relationships can be established between an item and other resources within the &#39;data&#39; domain service (folders, items, and versions).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {Array.<String>} opts.filterMimeType Filter by mime type.
     * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
     * data is of type: {module:model/Refs}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItemRelationshipsLinks = function(projectId, itemId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getItemRelationshipsLinks");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling getItemRelationshipsLinks");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv'),
        'filter[mimeType]': this.apiClient.buildCollectionParam(opts['filterMimeType'], 'csv')
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
        '/data/v1/projects/{project_id}/items/{item_id}/relationships/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the custom relationships that are associated to the given &#x60;item_id&#x60;. Custom relationships can be established between an item and other resources within the &#39;data&#39; domain service (folders, items, and versions).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
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
    this.getItemRelationshipsRefs = function(projectId, itemId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getItemRelationshipsRefs");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling getItemRelationshipsRefs");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
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
        '/data/v1/projects/{project_id}/items/{item_id}/relationships/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the \&quot;tip\&quot; version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * data is of type: {module:model/Version}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItemTip = function(projectId, itemId, oauth2client, credentials) {
      return (this.getItemTip2(projectId, itemId, {}, oauth2client, credentials));
    };

    /**
     * Returns the \&quot;tip\&quot; version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * data is of type: {module:model/Version}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItemTip2 = function(projectId, itemId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getItemTip");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling getItemTip");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
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
        '/data/v1/projects/{project_id}/items/{item_id}/tip', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns versions for the given item. Multiple versions of a resource item can be uploaded in a project.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {Array.<Integer>} opts.filterVersionNumber filter by `versionNumber`
     * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
     * @param {Integer} opts.pageNumber specify the page number
     * @param {Integer} opts.pageLimit specify the maximal number of elements per page
     * data is of type: {module:model/Versions}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getItemVersions = function(projectId, itemId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getItemVersions");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling getItemVersions");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv'),
        'filter[versionNumber]': this.apiClient.buildCollectionParam(opts['filterVersionNumber'], 'csv'),
        'page[number]': opts['pageNumber'],
        'page[limit]': opts['pageLimit']
        // 'page[number]': this.apiClient.buildCollectionParam(opts['pageNumber'], 'csv'),
        // 'page[limit]': this.apiClient.buildCollectionParam(opts['pageLimit'], 'csv'),
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
      var returnType = Versions;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/items/{item_id}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Creates a new item in the &#39;data&#39; domain service.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateItem} body describe the item to be created
     * data is of type: {module:model/ItemCreated}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postItem = function(projectId, body, oauth2client, credentials) {
      return (this.postItem2(projectId, body, {}, oauth2client, credentials));
    };

    /**
     * Creates a new item in the &#39;data&#39; domain service.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateItem} body describe the item to be created
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {String} opts.copyFrom Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy.
     * data is of type: {module:model/ItemCreated}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postItem2 = function(projectId, body, opts, oauth2client, credentials) {
      opt = opts || {};
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling postItem");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling postItem");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
        copyFrom: opts.copyFrom
      };
      var headerParams = {
        'x-user-id': opts.xuserid
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = ItemCreated;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Creates a custom relationship between an item and another resource within the &#39;data&#39; domain service (folder, item, or version).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postItemRelationshipsRef = function(projectId, itemId, body, oauth2client, credentials) {
      return(this.postItemRelationshipsRef2(projectId, itemId, body, {}, oauth2client, credentials));
    };

    /**
     * Creates a custom relationship between an item and another resource within the &#39;data&#39; domain service (folder, item, or version).
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postItemRelationshipsRef2 = function(projectId, itemId, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling postItemRelationshipsRef");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling postItemRelationshipsRef");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling postItemRelationshipsRef");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
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
        '/data/v1/projects/{project_id}/items/{item_id}/relationships/refs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Updates the properties of the given item_id object.
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} itemId the &#x60;item id&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
     * @param {Object} body describe the ref to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.patchItem = function(projectId, itemId, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling patchFolder");
      }

      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        return Promise.reject("Missing the required parameter 'itemId' when calling patchFolder");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling patchFolder");
      }

      var pathParams = {
        'project_id': projectId,
        'item_id': itemId
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
        '/data/v1/projects/{project_id}/items/{item_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };
    
  };

  return exports;
}());
