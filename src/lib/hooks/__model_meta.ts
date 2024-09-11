/* eslint-disable */
const metadata = {
    models: {
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, email: {
                    name: "email",
                    type: "String",
                    isOptional: true,
                }, emailVerified: {
                    name: "emailVerified",
                    type: "DateTime",
                    isOptional: true,
                }, password: {
                    name: "password",
                    type: "String",
                }, documentNumber: {
                    name: "documentNumber",
                    type: "String",
                }, phoneNumber: {
                    name: "phoneNumber",
                    type: "String",
                }, role: {
                    name: "role",
                    type: "UserRole",
                    attributes: [{ "name": "@default", "args": [] }],
                }, age: {
                    name: "age",
                    type: "Int",
                }, firstName: {
                    name: "firstName",
                    type: "String",
                }, lastName: {
                    name: "lastName",
                    type: "String",
                    isOptional: true,
                }, imageUrl: {
                    name: "imageUrl",
                    type: "String",
                }, termsAccepted: {
                    name: "termsAccepted",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, marketingOptIn: {
                    name: "marketingOptIn",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, disabledAt: {
                    name: "disabledAt",
                    type: "DateTime",
                    isOptional: true,
                }, bannedAt: {
                    name: "bannedAt",
                    type: "DateTime",
                    isOptional: true,
                }, lastLogin: {
                    name: "lastLogin",
                    type: "DateTime",
                    isOptional: true,
                }, accounts: {
                    name: "accounts",
                    type: "Account",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, auditLogs: {
                    name: "auditLogs",
                    type: "AuditLog",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, rafflesCreated: {
                    name: "rafflesCreated",
                    type: "Raffle",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'creator',
                }, rafflesWon: {
                    name: "rafflesWon",
                    type: "WinnerOnRaffle",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'winner',
                }, sessions: {
                    name: "sessions",
                    type: "Session",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, tickets: {
                    name: "tickets",
                    type: "Ticket",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'owner',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, email: {
                    name: "email",
                    fields: ["email"]
                }, documentNumber: {
                    name: "documentNumber",
                    fields: ["documentNumber"]
                }, phoneNumber: {
                    name: "phoneNumber",
                    fields: ["phoneNumber"]
                },
            }
            ,
        }
        ,
        account: {
            name: 'Account', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, access_token: {
                    name: "access_token",
                    type: "String",
                    isOptional: true,
                }, expires_at: {
                    name: "expires_at",
                    type: "Int",
                    isOptional: true,
                }, id_token: {
                    name: "id_token",
                    type: "String",
                    isOptional: true,
                }, provider: {
                    name: "provider",
                    type: "String",
                }, providerAccountId: {
                    name: "providerAccountId",
                    type: "String",
                }, refresh_token: {
                    name: "refresh_token",
                    type: "String",
                    isOptional: true,
                }, refresh_token_expires_in: {
                    name: "refresh_token_expires_in",
                    type: "Int",
                    isOptional: true,
                }, scope: {
                    name: "scope",
                    type: "String",
                    isOptional: true,
                }, session_state: {
                    name: "session_state",
                    type: "String",
                    isOptional: true,
                }, token_type: {
                    name: "token_type",
                    type: "String",
                    isOptional: true,
                }, type: {
                    name: "type",
                    type: "String",
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'accounts',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, provider_providerAccountId: {
                    name: "provider_providerAccountId",
                    fields: ["provider", "providerAccountId"]
                },
            }
            ,
        }
        ,
        session: {
            name: 'Session', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, expires: {
                    name: "expires",
                    type: "DateTime",
                }, ipAddress: {
                    name: "ipAddress",
                    type: "String",
                    isOptional: true,
                }, sessionToken: {
                    name: "sessionToken",
                    type: "String",
                }, userAgent: {
                    name: "userAgent",
                    type: "String",
                    isOptional: true,
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'sessions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, sessionToken: {
                    name: "sessionToken",
                    fields: ["sessionToken"]
                },
            }
            ,
        }
        ,
        verificationToken: {
            name: 'VerificationToken', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, identifier: {
                    name: "identifier",
                    type: "String",
                }, expires: {
                    name: "expires",
                    type: "DateTime",
                }, token: {
                    name: "token",
                    type: "String",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, token: {
                    name: "token",
                    fields: ["token"]
                }, identifier_token: {
                    name: "identifier_token",
                    fields: ["identifier", "token"]
                },
            }
            ,
        }
        ,
        auditLog: {
            name: 'AuditLog', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, action: {
                    name: "action",
                    type: "String",
                }, details: {
                    name: "details",
                    type: "String",
                    isOptional: true,
                }, ipAddress: {
                    name: "ipAddress",
                    type: "String",
                    isOptional: true,
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'auditLogs',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        raffle: {
            name: 'Raffle', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, creatorId: {
                    name: "creatorId",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    isForeignKey: true,
                    relationField: 'creator',
                    defaultValueProvider: $default$Raffle$creatorId,
                }, name: {
                    name: "name",
                    type: "String",
                }, description: {
                    name: "description",
                    type: "String",
                }, imageUrl: {
                    name: "imageUrl",
                    type: "String",
                }, status: {
                    name: "status",
                    type: "RaffleStatus",
                    attributes: [{ "name": "@default", "args": [] }],
                }, currency: {
                    name: "currency",
                    type: "CurrencyType",
                    attributes: [{ "name": "@default", "args": [] }],
                }, ticketPrice: {
                    name: "ticketPrice",
                    type: "Decimal",
                }, drawDate: {
                    name: "drawDate",
                    type: "DateTime",
                }, drawEndDate: {
                    name: "drawEndDate",
                    type: "DateTime",
                    isOptional: true,
                }, drawType: {
                    name: "drawType",
                    type: "RaffleDrawType",
                    attributes: [{ "name": "@default", "args": [] }],
                }, maxTickets: {
                    name: "maxTickets",
                    type: "RaffleMaxTickets",
                    attributes: [{ "name": "@default", "args": [] }],
                }, isCharity: {
                    name: "isCharity",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, charityInfo: {
                    name: "charityInfo",
                    type: "String",
                    isOptional: true,
                }, termsConditions: {
                    name: "termsConditions",
                    type: "String",
                }, prizes: {
                    name: "prizes",
                    type: "Prize",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'raffle',
                }, tickets: {
                    name: "tickets",
                    type: "Ticket",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'raffle',
                }, winners: {
                    name: "winners",
                    type: "WinnerOnRaffle",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'raffle',
                }, creator: {
                    name: "creator",
                    type: "User",
                    isDataModel: true,
                    backLink: 'rafflesCreated',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "creatorId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        prize: {
            name: 'Prize', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, raffleId: {
                    name: "raffleId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'raffle',
                }, name: {
                    name: "name",
                    type: "String",
                }, description: {
                    name: "description",
                    type: "String",
                }, imageUrl: {
                    name: "imageUrl",
                    type: "String",
                    isOptional: true,
                }, quantity: {
                    name: "quantity",
                    type: "Int",
                    attributes: [{ "name": "@default", "args": [{ "value": 1 }] }],
                }, value: {
                    name: "value",
                    type: "Decimal",
                }, winners: {
                    name: "winners",
                    type: "WinnerOnRaffle",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'prize',
                }, raffle: {
                    name: "raffle",
                    type: "Raffle",
                    isDataModel: true,
                    backLink: 'prizes',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "raffleId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        ticket: {
            name: 'Ticket', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, raffleId: {
                    name: "raffleId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'raffle',
                }, ownerId: {
                    name: "ownerId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'owner',
                }, status: {
                    name: "status",
                    type: "TicketStatus",
                    attributes: [{ "name": "@default", "args": [] }],
                }, number: {
                    name: "number",
                    type: "Int",
                    isOptional: true,
                }, paymentId: {
                    name: "paymentId",
                    type: "String",
                    isOptional: true,
                }, owner: {
                    name: "owner",
                    type: "User",
                    isDataModel: true,
                    backLink: 'tickets',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "ownerId" },
                }, raffle: {
                    name: "raffle",
                    type: "Raffle",
                    isDataModel: true,
                    backLink: 'tickets',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "raffleId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, paymentId: {
                    name: "paymentId",
                    fields: ["paymentId"]
                }, raffleId_number: {
                    name: "raffleId_number",
                    fields: ["raffleId", "number"]
                },
            }
            ,
        }
        ,
        winnerOnRaffle: {
            name: 'WinnerOnRaffle', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                }, prizeId: {
                    name: "prizeId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'prize',
                }, raffleId: {
                    name: "raffleId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'raffle',
                }, winnerId: {
                    name: "winnerId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'winner',
                }, claimedAt: {
                    name: "claimedAt",
                    type: "DateTime",
                    isOptional: true,
                }, prize: {
                    name: "prize",
                    type: "Prize",
                    isDataModel: true,
                    backLink: 'winners',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "prizeId" },
                }, raffle: {
                    name: "raffle",
                    type: "Raffle",
                    isDataModel: true,
                    backLink: 'winners',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "raffleId" },
                }, winner: {
                    name: "winner",
                    type: "User",
                    isDataModel: true,
                    backLink: 'rafflesWon',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "winnerId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, raffleId_winnerId_prizeId: {
                    name: "raffleId_winnerId_prizeId",
                    fields: ["raffleId", "winnerId", "prizeId"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
        user: ['Account', 'Session', 'Raffle'],
    }
    ,
    authModel: 'User'
};
function $default$Raffle$creatorId(user: any): unknown {
    return user?.id;
}
export default metadata;
