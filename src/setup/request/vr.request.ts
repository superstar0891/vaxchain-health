import { StatisticsModel } from "app/models/StatisticsModel";
import axios from "axios";

const request = {
    uploadRecords: async (lguId: string, vcId: string, idToken : string) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`
            },
        }

        try {
            const response = await axios.put(`local-government-units/${lguId}/vaccination-centers/${vcId}/vaccination-records`, config);
            return response;
        } catch (error) {
            let errorMessage = 'Failed to do something exceptional';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    },
    getStatistics: async (startDate: string, endDate: string, accessToken: string): Promise<StatisticsModel> => {
        let config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                startDate, endDate
            }
        };

        try {
            const response: StatisticsModel = await axios.get('statistics', config);
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
