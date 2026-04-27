'use server';
/**
 * @fileOverview An AI-powered menu assistant that suggests items based on time of day and weather.
 *
 * - getPersonalizedMenuSuggestions - A function that handles the personalized menu suggestion process.
 * - PersonalizedMenuSuggestionsInput - The input type for the getPersonalizedMenuSuggestions function.
 * - PersonalizedMenuSuggestionsOutput - The return type for the getPersonalizedMenuSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedMenuSuggestionsInputSchema = z.object({
  timeOfDay: z
    .enum([
      'morning',
      'late morning',
      'noon',
      'afternoon',
      'late afternoon',
      'evening',
      'night',
    ])
    .describe('The current time of day.'),
  weatherCondition: z
    .enum([
      'sunny',
      'cloudy',
      'rainy',
      'stormy',
      'cold',
      'chilly',
      'warm',
      'hot',
      'snowy',
      'windy',
    ])
    .describe('The current weather condition.'),
});
export type PersonalizedMenuSuggestionsInput = z.infer<
  typeof PersonalizedMenuSuggestionsInputSchema
>;

const PersonalizedMenuItemSchema = z.object({
  name: z.string().describe('The name of the suggested menu item.'),
  category: z
    .enum(['Coffee', 'Juices', 'Desserts', 'Snacks', 'Main Course', 'Tea'])
    .describe('The category of the menu item.'),
  reason: z
    .string()
    .describe(
      'A brief reason explaining why this item is suggested for the given conditions.'
    ),
});

const PersonalizedMenuSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(PersonalizedMenuItemSchema)
    .min(1)
    .max(3)
    .describe('A list of personalized menu item suggestions.'),
});
export type PersonalizedMenuSuggestionsOutput = z.infer<
  typeof PersonalizedMenuSuggestionsOutputSchema
>;

export async function getPersonalizedMenuSuggestions(
  input: PersonalizedMenuSuggestionsInput
): Promise<PersonalizedMenuSuggestionsOutput> {
  return personalizedMenuSuggestionsFlow(input);
}

const personalizedMenuSuggestionsPrompt = ai.definePrompt({
  name: 'personalizedMenuSuggestionsPrompt',
  input: {schema: PersonalizedMenuSuggestionsInputSchema},
  output: {schema: PersonalizedMenuSuggestionsOutputSchema},
  prompt: `You are an expert menu assistant for 'Aura Brews & Bites', where customers 'Sip the Magic, Taste the Love'.
Your task is to provide personalized menu suggestions based on the current time of day and weather conditions.
Consider a diverse range of items including Coffee, Juices, Desserts, Snacks, Main Courses, and Tea.

Here are the current conditions:
Time of day: {{{timeOfDay}}}
Weather: {{{weatherCondition}}}

Suggest 1 to 3 menu items that would be perfect for these conditions, providing the name, category, and a compelling reason for each suggestion.
Think creatively and provide enticing suggestions.`,
});

const personalizedMenuSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedMenuSuggestionsFlow',
    inputSchema: PersonalizedMenuSuggestionsInputSchema,
    outputSchema: PersonalizedMenuSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await personalizedMenuSuggestionsPrompt(input);
    return output!;
  }
);
