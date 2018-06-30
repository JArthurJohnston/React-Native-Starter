import React from "react";
import {initialRoute} from "../Navigator"

describe('Navigation Routes', () => {

    it('should have the welcome screen as the default route', () => {
        expect(initialRoute).toEqual('navOne');
    });

});
