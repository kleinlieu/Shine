package com.hp.miniapp.sample;

import com.hp.btoaw.integration.data.BTOContext;
import com.hp.btoaw.integration.data.UserProfile;
import com.hp.btoaw.integration.data.miniapp.*;
import com.hp.btoaw.integration.service.DataSourceService;
import com.hp.btoaw.integration.service.bl.AbstractBTOServiceEE;
import com.hp.btoaw.integration.service.exception.CustomException;
import com.hp.btoaw.integration.service.provider.DataSourceProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service("Shine")
public class MainApp extends AbstractBTOServiceEE {
	
	private static Logger logger = LoggerFactory.getLogger(MainApp.class);

    @Autowired
    private DataSourceService dataSourceService;

    /*
    * return collection of EntryPointDefinitions
    *  according to given context, and current opened entrypoints on canvas
    * */
    @Override
    public Collection<EntryPointDefinition> getEntryPointDefinitionsByContext(Collection<BTOContext> btoContexts, Collection<EntryPointDefinition> entryPointDefinitions) throws CustomException {

       return null;
    }

    /*
    * return collection of general EntryPointDefinitions
    *   regardless of context
    * */
    @Override
    public Collection<EntryPointDefinition> getSupportedEntryPointDefinitionsNoContext() throws CustomException {

        return null;
    }

    /*
     *  return a collection of UserProfiles
     *  usually, this method will call some BackEnd service in order to fetch relevant persons per given Context
     *  these users will be suggested as participants
     *
     *  Note: UserProfile consist of userId  - which is the userId as appears in the internal user repository
      *  and for external users you can use email address as userId
     */
    @Override
    public Collection<UserProfile> getRelatedUsers(Collection<BTOContext> btoContexts) throws CustomException {

        return null;
    }

    /*
    * return DataSourceProvider
    *   a connector prototype to this MainApp's Backend
    * */
    public DataSourceProvider getDataSourceProvider() {
        return null;
    }
}