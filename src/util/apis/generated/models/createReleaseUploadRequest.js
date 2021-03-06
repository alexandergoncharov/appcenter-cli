/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a CreateReleaseUploadRequest.
 */
class CreateReleaseUploadRequest {
  /**
   * Create a CreateReleaseUploadRequest.
   * @property {string} fileExtension The file extension of the uploaded file.
   * Possible values include: 'ipa', 'apk', 'msi', 'xap', 'appx', 'appxbundle',
   * 'msix', 'msixbundle', 'appxupload', 'msixupload', 'app.zip', 'dmg', 'pkg'
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateReleaseUploadRequest
   *
   * @returns {object} metadata of CreateReleaseUploadRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateReleaseUploadRequest',
      type: {
        name: 'Composite',
        className: 'CreateReleaseUploadRequest',
        modelProperties: {
          fileExtension: {
            required: true,
            serializedName: 'file_extension',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateReleaseUploadRequest;
