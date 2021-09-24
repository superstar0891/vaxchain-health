import { LGUModel } from "app/models/LGUModel";
import axiosInstance from "setup/axios/SetupAxios";

interface requestBodyTypes {
    "name": string,
    "city": string,
    "municipality": string,
    "province": string,
    "region": string,
    "administratorId": string,
    "staffIds": [
        string
    ],
    "targets": [
        {
            "suburb": string,
            "count": number
        }
    ]
};

console.log("header", axiosInstance);

const request = {
    createLGU: async (requestBody: requestBodyTypes): Promise<LGUModel> => {
        try {
            const response: LGUModel = await axiosInstance.post('local-government-units', requestBody);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getLGUs: async (limit: number, page: number): Promise<LGUModel[]> => {
        try {
            const response: LGUModel[] = await axiosInstance.get('local-government-units', {
                params: { limit, page }
            });
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getLGU: async (lguId: string): Promise<LGUModel> => {
        try {
            const response: LGUModel = await axiosInstance.get(`local-government-units/${lguId}`);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    updateLGU: async (lguId: string, requestBody: requestBodyTypes): Promise<LGUModel> => {
        try {
            const response: LGUModel = await axiosInstance.patch(`local-government-units/${lguId}`, requestBody);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    }
}

export default request;
