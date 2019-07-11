export const UPDATE_APP = `
  mutation AppsUpdate($appKey: String!, $appParams: Json!){
    appsUpdate(appKey: $appKey, appParams: $appParams){
      errors
      app{
        encryptionKey
        key
        name
        preferences
        configFields
        theme
        activeMessenger
        segments {
          name
          id
          properties
        }
        state
        tagline
      }
    }
  }
`;

export const DESTROY_APP = `
  mutation AppsUpdate($appKey: String!){
    appsDestroy(appKey: $appKey){
      errors
      app{
        encryptionKey
        key
        name
        preferences
        configFields
        theme
        activeMessenger
        segments {
          name
          id
          properties
        }
        state
        tagline
      }
    }
  }
`;

export const CREATE_APP = `
  mutation AppsCreate($appParams: Json!, $operation: String){
    appsCreate(appParams: $appParams, operation: $operation){
      errors
      app{
        encryptionKey
        key
        name
        preferences
        configFields
        theme
        state
        tagline
        activeMessenger
      }
    }
  }
`;


export const APP_USER_UPDATE_STATE = `

  mutation AppUserUpdateData($appKey: String!, $id: Int!, $state: String!){
    appUserUpdateData(appKey: $appKey, id: $id, state: $state){
 
      appUser {
        id
        email
        lastVisitedAt
        referrer
        state
        ip
        city
        region
        country
        lat
        lng
        postal
        webSessions
        timezone
        browser
        browserVersion
        os
        osVersion
        browserLanguage
        online
        lang
        displayName
        name
      }

    }
  }
`;

export const START_CONVERSATION = `
  mutation StartConversation($appKey: String!, $id: Int!, $message: Json!){
    startConversation(appKey: $appKey, id: $id, message: $message){
      conversation{
        id
        state 
        readAt
        priority
        assignee {
          id
          email
        }
        mainParticipant{
          id
          email
          properties
        }
      }
    }
  }
`;

export const INSERT_COMMMENT = `
  mutation InsertComment($appKey: String!, $id: Int!, $message: Json!){
    insertComment(appKey: $appKey, id: $id, message: $message){
      message{
        message{
          htmlContent
          textContent
          serializedContent
        }
        readAt
        appUser{
          id
          email
          kind
          displayName
        }
        source
        messageSource {
          name
          state
          fromName
          fromEmail
          serializedContent
        }
        emailMessageId
      }
    }
  }
`;

export const INSERT_NOTE = `
  mutation InsertNote($appKey: String!, $id: Int!, $message: Json!){
    insertNote(appKey: $appKey, id: $id, message: $message){
      message{
        message{
          htmlContent
          textContent
          serializedContent
        }
        readAt
        createdAt
        appUser{
          id
          email
          kind
          displayName
        }
        source
        messageSource {
          name
          state
          fromName
          fromEmail
          serializedContent
        }
        emailMessageId
      }
    }
  }
`;

export const ASSIGN_USER = `
  mutation AssignUser($appKey: String!, $conversationId: Int!, $appUserId: Int!){
    assignUser(appKey: $appKey, conversationId: $conversationId, appUserId: $appUserId){
      conversation{
        id
        state 
        readAt
        priority
        assignee {
          id
          email
        }
        mainParticipant{
          id
          email
          properties
        }
      }
    }
  }
`;

export const CREATE_ASSIGNMENT_RULE = `
  mutation CreateAssignmentRule($appKey: String!, $agentId: String!, $title: String!, $active: String!, $conditions: Json!){
    createAssignmentRule(appKey: $appKey, agentId: $agentId, title: $title, active: $active, conditions: $conditions){
      errors
      assignmentRule{
        id
        title
        conditions
        state
        agent{
          id
          email
        }
        state
      }
    }
  }
`;

export const UPDATE_RULE_PRIORITIES = `
  mutation UpdateRulePriorities($appKey: String!, $rules: [Json!]!){
    updateRulePriorities(appKey: $appKey, rules: $rules){
      errors
    }
  }
`;

export const EDIT_ASSIGNMENT_RULE = `
  mutation EditAssignmentRule($appKey: String!, $ruleId: Int!, $agentId: String!, $title: String!, $active: String!, $conditions: Json!){
    editAssignmentRule(appKey: $appKey, ruleId: $ruleId, agentId: $agentId, title: $title, active: $active, conditions: $conditions){
      errors
      assignmentRule{
        id
        title
        conditions
        state
        agent{
          id
          email
        }
        state
      }
    }
  }
`;

export const DELETE_ASSIGNMENT_RULE = `
  mutation DeleteAssignmentRule($appKey: String!, $ruleId: Int! ){
    deleteAssignmentRule(appKey: $appKey, ruleId: $ruleId){
      errors
      assignmentRule{
        id
        title
        conditions
        state
        agent{
          id
          email
        }
        state
      }
    }
  }
`;

export const UPDATE_CONVERSATION_STATE = `
  mutation UpdateConversationState($appKey: String!, $conversationId: Int!, $state: String!){
    updateConversationState(appKey: $appKey, conversationId: $conversationId, state: $state){
      conversation{
        id
        state 
        readAt
        priority
        assignee {
          id
          email
        }
        mainParticipant{
          id
          email
          properties
        }
      }
    }
  }
`;

export const TOGGLE_CONVERSATION_PRIORITY = `
  mutation ToggleConversationPriority($appKey: String!, $conversationId: Int!){
    toggleConversationPriority(appKey: $appKey, conversationId: $conversationId){
      conversation{
        id
        state 
        readAt
        priority
        assignee {
          id
          email
        }
        mainParticipant{
          id
          email
          properties
        }
      }
    }
  }
`;

export const UPDATE_CAMPAIGN = `
  mutation UpdateCampaign($appKey: String!, $id: Int!, $campaignParams: Json!){
    campaignUpdate(appKey: $appKey, id: $id, campaignParams: $campaignParams){
      errors
      campaign {
        name
        id
        type
        serializedContent
        segments
        scheduledAt
        scheduledTo
        state
        subject
        timezone
        description
        statsFields
        configFields
        fromName
        fromEmail
        replyEmail
      }
    }
  }
`;

export const CREATE_CAMPAIGN = `
  mutation CreateCampaign($appKey: String!, $campaignParams: Json!, $operation: String, $mode: String!){
    campaignCreate(operation: $operation, appKey: $appKey, mode: $mode, campaignParams: $campaignParams){
      errors
      campaign {
        name
        id
        type
        serializedContent
        segments
        scheduledAt
        scheduledTo
        state
        subject
        timezone
        description
        statsFields
        configFields
        fromName
        fromEmail
        replyEmail
      }
    }
  }
`;

export const PREDICATES_SEARCH = `
  mutation PredicatesSearch($appKey: String!, $search: Json!, $page: Int, $per: Int){
    predicatesSearch(appKey: $appKey, search: $search, page: $page, per: $per){
      appUsers{
        collection{
          id
          email
          os
          osVersion
          lastVisitedAt
          browser
          state
          displayName
          online

          referrer
          ip
          city
          region
          country
          lat
          lng
          postal
          webSessions
          timezone
          browser
          browserVersion
          browserLanguage
          lang
        }
        meta
      }
    }
  }
`;

export const PREDICATES_DELETE = `
  mutation PredicatesDelete($appKey: String!, $id: Int,){
    predicatesDelete(appKey: $appKey, id: $id){
      segment {
        name
      }
    }
  }
`;

export const PREDICATES_CREATE = `
  mutation PredicatesCreate($appKey: String!, $operation: String, $name: String!, $predicates: Json!){
    predicatesCreate(appKey: $appKey, operation: $operation, name: $name, predicates: $predicates){
      segment {
        id
        name
        predicates{
          comparison
          type
          value
          attribute
        }
      }
    }
  }
`;


export const PREDICATES_UPDATE = `
  mutation PredicatesUpdate($appKey: String!, $predicates: Json!, $id: Int){
    predicatesUpdate(appKey: $appKey, predicates: $predicates, id: $id){
      segment {
        id
        name
        predicates {
          comparison
          type
          value
          attribute
        }
      }
    }
  }
`;

export const INVITE_AGENT = `
  mutation InviteAgent($appKey: String!, $email: String!){
    inviteAgent(appKey: $appKey, email: $email){
      agent {
        email
      }
    }
  }
`;

export const CREATE_ARTICLE = `
  mutation CreateArticle($appKey: String!, $content: Json!, $title: String!){
    createArticle(appKey: $appKey, content: $content, title: $title){
      article {
        id
        title
        slug
        content
        author{
          email
          id
          name
        }
      }
    }
  }
`;

export const EDIT_ARTICLE = `
  mutation EditArticle($appKey: String!, $content: Json!, $id: Int!, $title: String!){
    editArticle(appKey: $appKey, content: $content, id: $id, title: $title){
      article {
        id
        title
        slug
        content
        author{
          email
          id
          name
        }
      }
    }
  }
`;

export const DELETE_ARTICLE = `
  mutation DeleteArticle($appKey: String!, $id: Int!){
    deleteArticle(appKey: $appKey, id: $id){
      article {
        id
        title
        slug
        content
      }
    }
  }
`;
