import { kycDocumentTypes } from "../data/kyc-documents.js";
import { yearlyIncomeOptions } from "../data/yearly-income.js";
import { incomeSourceOptions } from "../data/income-sources.js";
import {
  KYCDocumentTypesResponse,
  YearlyIncomeResponse,
  IncomeSourcesResponse,
} from "../schemas/index.js";

/**
 * Register KYC routes
 * @param {import('fastify').FastifyInstance} fastify
 */
export async function kycRoutes(fastify) {
  // GET /kyc/document-types - Get all KYC document types with fields
  fastify.get(
    "/kyc/document-types",
    {
      schema: {
        tags: ["kyc"],
        description:
          "Get all available KYC document types with field requirements and validation rules",
        summary: "Get KYC document types",
        response: {
          200: KYCDocumentTypesResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: kycDocumentTypes,
      });
    }
  );

  // GET /kyc/yearly-income - Get yearly income options
  fastify.get(
    "/kyc/yearly-income",
    {
      schema: {
        tags: ["kyc"],
        description: "Get all yearly income range options for KYC",
        summary: "Get yearly income options",
        response: {
          200: YearlyIncomeResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: yearlyIncomeOptions,
        message: "Yearly income options retrieved successfully",
      });
    }
  );

  // GET /kyc/income-sources - Get income source options
  fastify.get(
    "/kyc/income-sources",
    {
      schema: {
        tags: ["kyc"],
        description: "Get all income source options for KYC",
        summary: "Get income source options",
        response: {
          200: IncomeSourcesResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: incomeSourceOptions,
        message: "Income source options retrieved successfully",
      });
    }
  );

  fastify.log.info("KYC routes registered");
}
