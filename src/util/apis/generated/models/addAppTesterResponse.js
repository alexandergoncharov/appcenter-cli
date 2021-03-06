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
 * Class representing a AddAppTesterResponse.
 */
class AddAppTesterResponse {
  /**
   * Create a AddAppTesterResponse.
   * @property {uuid} userId The user ID of the tester that needs to be added
   * @property {number} releaseId The ID of the release the user was added to
   */
  constructor() {
  }

  /**
   * Defines the metadata of AddAppTesterResponse
   *
   * @returns {object} metadata of AddAppTesterResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AddAppTesterResponse',
      type: {
        name: 'Composite',
        className: 'AddAppTesterResponse',
        modelProperties: {
          userId: {
            required: true,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          releaseId: {
            required: true,
            serializedName: 'release_id',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AddAppTesterResponse;
