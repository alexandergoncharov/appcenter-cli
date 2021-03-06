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

const models = require('./index');

/**
 * Github bugtracker specific settings
 *
 * @extends models['AlertingBugtrackerSettings']
 */
class AlertingGithubBugtrackerSettings extends models['AlertingBugtrackerSettings'] {
  /**
   * Create a AlertingGithubBugtrackerSettings.
   * @property {number} githubRepoId
   * @property {string} githubRepoName
   * @property {string} [githubLabel]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AlertingGithubBugtrackerSettings
   *
   * @returns {object} metadata of AlertingGithubBugtrackerSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'github',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'AlertingBugtrackerSettings',
        className: 'AlertingGithubBugtrackerSettings',
        modelProperties: {
          callbackUrl: {
            required: false,
            serializedName: 'callback_url',
            type: {
              name: 'String'
            }
          },
          ownerName: {
            required: true,
            serializedName: 'owner_name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          githubRepoId: {
            required: true,
            serializedName: 'github_repo_id',
            type: {
              name: 'Number'
            }
          },
          githubRepoName: {
            required: true,
            serializedName: 'github_repo_name',
            type: {
              name: 'String'
            }
          },
          githubLabel: {
            required: false,
            serializedName: 'github_label',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertingGithubBugtrackerSettings;
