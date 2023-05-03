export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string | null;
          id: number;
          title: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          title: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          title?: string;
        };
      };
      comment: {
        Row: {
          course_id: number;
          created_at: string | null;
          id: number;
          is_flagged: boolean | null;
          is_validated: boolean;
          user_id: string;
        };
        Insert: {
          course_id: number;
          created_at?: string | null;
          id?: number;
          is_flagged?: boolean | null;
          is_validated?: boolean;
          user_id: string;
        };
        Update: {
          course_id?: number;
          created_at?: string | null;
          id?: number;
          is_flagged?: boolean | null;
          is_validated?: boolean;
          user_id?: string;
        };
      };
      courses: {
        Row: {
          author: string;
          categories: number | null;
          coordinates: Json | null;
          created_at: string | null;
          description: string | null;
          duration_minutes: number;
          id: number;
          is_flagged: boolean | null;
          is_validated: boolean;
          picture_url: string | null;
          place_available: number;
          tags: string[] | null;
          time_slot: string | null;
          title: string | null;
        };
        Insert: {
          author?: string;
          categories?: number | null;
          coordinates?: Json | null;
          created_at?: string | null;
          description?: string | null;
          duration_minutes?: number;
          id?: number;
          is_flagged?: boolean | null;
          is_validated?: boolean;
          picture_url?: string | null;
          place_available?: number;
          tags?: string[] | null;
          time_slot?: string | null;
          title?: string | null;
        };
        Update: {
          author?: string;
          categories?: number | null;
          coordinates?: Json | null;
          created_at?: string | null;
          description?: string | null;
          duration_minutes?: number;
          id?: number;
          is_flagged?: boolean | null;
          is_validated?: boolean;
          picture_url?: string | null;
          place_available?: number;
          tags?: string[] | null;
          time_slot?: string | null;
          title?: string | null;
        };
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          role: string[];
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          role?: string[];
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          role?: string[];
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string;
        };
        Returns: Record<string, unknown>;
      };
      delete_storage_object: {
        Args: {
          bucket: string;
          object: string;
        };
        Returns: Record<string, unknown>;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
