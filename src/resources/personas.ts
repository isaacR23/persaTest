// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Personas extends APIResource {
  /**
   * Gets a persona form the database.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Persona> {
    return this._client.get(`/persona/${id}`, options);
  }

  /**
   * Invoke a new persona inside the peresona class
   */
  invoke(body: PersonaInvokeParams, options?: Core.RequestOptions): Core.APIPromise<Persona> {
    return this._client.post('/persona', { body, ...options });
  }
}

export interface Persona {
  /**
   * unique identifier of a persona
   */
  id: number;

  /**
   * directive on the conversation style the agent must have
   */
  conversational_style: string;

  /**
   * unique identifier of a persona
   */
  current_persona: number;

  /**
   * A string that is clear about the overall purpose, role, behavioral directive of
   * the agent
   */
  objective: string;

  /**
   * The overal personality and values the agen has
   */
  personality: string;

  /**
   * Directive on how the agent should handle different errors durint the
   * conversation as well as how to be aware of the surroundings
   */
  response_guideline: string;

  /**
   * A string that is claer about the tone directives the agent has to use
   */
  style_guardrails: string;

  /**
   * This is about the agents overall job, the role they are playing, and the vibe
   * they need to bring. Its about handling things smoothly, staying in character,
   * and keeping the conversation natural and focused.
   */
  task: string;
}

export interface PersonaInvokeParams {
  /**
   * directive on the conversation style the agent must have
   */
  conversational_style: string;

  /**
   * unique identifier of a persona
   */
  current_persona: number;

  /**
   * A string that is clear about the overall purpose, role, behavioral directive of
   * the agent
   */
  objective: string;

  /**
   * The overal personality and values the agen has
   */
  personality: string;

  /**
   * Directive on how the agent should handle different errors durint the
   * conversation as well as how to be aware of the surroundings
   */
  response_guideline: string;

  /**
   * A string that is claer about the tone directives the agent has to use
   */
  style_guardrails: string;

  /**
   * This is about the agents overall job, the role they are playing, and the vibe
   * they need to bring. Its about handling things smoothly, staying in character,
   * and keeping the conversation natural and focused.
   */
  task: string;
}

export declare namespace Personas {
  export { type Persona as Persona, type PersonaInvokeParams as PersonaInvokeParams };
}
