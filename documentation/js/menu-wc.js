'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">reserve-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-528e39a436ddd7cae954c20eb67bfa49dda4d00a467fd7670ac0df20876b7658baabb2e77868596613df94b8236847a9df632bc399e4b63b65ac74cc8bbb3594"' : 'data-target="#xs-injectables-links-module-AuthModule-528e39a436ddd7cae954c20eb67bfa49dda4d00a467fd7670ac0df20876b7658baabb2e77868596613df94b8236847a9df632bc399e4b63b65ac74cc8bbb3594"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-528e39a436ddd7cae954c20eb67bfa49dda4d00a467fd7670ac0df20876b7658baabb2e77868596613df94b8236847a9df632bc399e4b63b65ac74cc8bbb3594"' :
                                        'id="xs-injectables-links-module-AuthModule-528e39a436ddd7cae954c20eb67bfa49dda4d00a467fd7670ac0df20876b7658baabb2e77868596613df94b8236847a9df632bc399e4b63b65ac74cc8bbb3594"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestModule.html" data-type="entity-link" >RequestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' : 'data-target="#xs-controllers-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' :
                                            'id="xs-controllers-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' }>
                                            <li class="link">
                                                <a href="controllers/RequestController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' : 'data-target="#xs-injectables-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' :
                                        'id="xs-injectables-links-module-RequestModule-7df74a52c3e42a6e7485cf35bbcbe1a28236838e2fbfca60c3ee76e2a058ee3057674702f031bc258457132ff474aed5446ee8595967c198ebd0fa71a093c52d"' }>
                                        <li class="link">
                                            <a href="injectables/RequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReserveModule.html" data-type="entity-link" >ReserveModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' : 'data-target="#xs-controllers-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' :
                                            'id="xs-controllers-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' }>
                                            <li class="link">
                                                <a href="controllers/ReserveController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReserveController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' : 'data-target="#xs-injectables-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' :
                                        'id="xs-injectables-links-module-ReserveModule-938ba2c58aad373317011734b0c3cddbe2cafdac57ec78cf33f33e3c756f70eb46e856623c111dee1e68782d18aec4c281005d233332296e071cd4676fe10c14"' }>
                                        <li class="link">
                                            <a href="injectables/ReserveService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReserveService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpaceModule.html" data-type="entity-link" >SpaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' : 'data-target="#xs-controllers-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' :
                                            'id="xs-controllers-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' }>
                                            <li class="link">
                                                <a href="controllers/SpaceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpaceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' : 'data-target="#xs-injectables-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' :
                                        'id="xs-injectables-links-module-SpaceModule-6cb90d6ae4c950ff956f482cec4da351e3524949a898d9f3fad219bb37c50e7d0ad7a5717f268e64583adb87c7e40369d02468a5ae7076362424d5bbbddfb85b"' }>
                                        <li class="link">
                                            <a href="injectables/SpaceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpaceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Request.html" data-type="entity-link" >Request</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Reserve.html" data-type="entity-link" >Reserve</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Space.html" data-type="entity-link" >Space</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateRequestDto.html" data-type="entity-link" >CreateRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReserveDto.html" data-type="entity-link" >CreateReserveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSpaceDto.html" data-type="entity-link" >CreateSpaceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestRepositoryMock.html" data-type="entity-link" >RequestRepositoryMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestRepositoryMock-1.html" data-type="entity-link" >RequestRepositoryMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestServiceMock.html" data-type="entity-link" >RequestServiceMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRequestDto.html" data-type="entity-link" >UpdateRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReserveDto.html" data-type="entity-link" >UpdateReserveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSpaceDto.html" data-type="entity-link" >UpdateSpaceDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DatabaseConfigService.html" data-type="entity-link" >DatabaseConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});