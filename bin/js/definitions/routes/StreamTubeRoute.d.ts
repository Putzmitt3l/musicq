import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./BaseRoute";
/**
 * "/youtube-download" route
 *
 */
export declare class StreamTubeRoute extends BaseRoute {
    /**
     * Create route
     *
     * @class StreamTubeRoute
     * @method create
     * @param router {Router} The Express Router.
     * @static
     */
    static create(router: Router): void;
    /**
     * Constructor
     *
     * @class StreamTubeRoute
     * @constructor
     */
    constructor();
    /**
     * The tube download page route.
     *
     * @class StreamTubeRoute
     * @method download
     * @param req {Request} The Express Request object.
     * @param res {Response} The Express Response object.
     * @param next {NextFunction} Execute the next method.
     */
    download(req: Request, res: Response, next: NextFunction): void;
    streamAudio(req: Request, res: Response, next: NextFunction): void;
    downloadAudioToRoot(req: Request, res: Response, next: NextFunction): void;
}
