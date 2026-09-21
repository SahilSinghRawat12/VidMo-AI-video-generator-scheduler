export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserTier = "free" | "creator" | "agency";
export type ChannelPlatform = "youtube" | "tiktok" | "instagram" | "email" | "x";
export type VideoStatus = "draft" | "generating" | "completed" | "failed";
export type PostStatus = "scheduled" | "publishing" | "published" | "failed" | "cancelled";
export type AspectRatio = "9:16" | "16:9" | "1:1" | "4:5";

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          avatar_url: string | null;
          tier: UserTier;
          video_credits: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          tier?: UserTier;
          video_credits?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          tier?: UserTier;
          video_credits?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedSchema: "auth";
          }
        ];
      };
      niches: {
        Row: {
          id: string;
          name: string;
          emoji: string | null;
          description: string | null;
          sample_hooks: string[];
          suggested_tags: string[];
          is_system: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          name: string;
          emoji?: string | null;
          description?: string | null;
          sample_hooks?: string[];
          suggested_tags?: string[];
          is_system?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          emoji?: string | null;
          description?: string | null;
          sample_hooks?: string[];
          suggested_tags?: string[];
          is_system?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      channels: {
        Row: {
          id: string;
          user_id: string;
          platform: ChannelPlatform;
          account_name: string;
          account_handle: string | null;
          avatar_url: string | null;
          is_connected: boolean;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          platform: ChannelPlatform;
          account_name: string;
          account_handle?: string | null;
          avatar_url?: string | null;
          is_connected?: boolean;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          platform?: ChannelPlatform;
          account_name?: string;
          account_handle?: string | null;
          avatar_url?: string | null;
          is_connected?: boolean;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "channels_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedSchema: "public";
          }
        ];
      };
      videos: {
        Row: {
          id: string;
          user_id: string;
          niche_id: string | null;
          title: string;
          topic: string | null;
          hook: string | null;
          full_script: string | null;
          hook_score: number | null;
          voice_id: string | null;
          cadence: string | null;
          duration_seconds: number | null;
          aspect_ratio: AspectRatio;
          tags: string[];
          status: VideoStatus;
          video_url: string | null;
          thumbnail_url: string | null;
          error_message: string | null;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          niche_id?: string | null;
          title: string;
          topic?: string | null;
          hook?: string | null;
          full_script?: string | null;
          hook_score?: number | null;
          voice_id?: string | null;
          cadence?: string | null;
          duration_seconds?: number | null;
          aspect_ratio?: AspectRatio;
          tags?: string[];
          status?: VideoStatus;
          video_url?: string | null;
          thumbnail_url?: string | null;
          error_message?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          niche_id?: string | null;
          title?: string;
          topic?: string | null;
          hook?: string | null;
          full_script?: string | null;
          hook_score?: number | null;
          voice_id?: string | null;
          cadence?: string | null;
          duration_seconds?: number | null;
          aspect_ratio?: AspectRatio;
          tags?: string[];
          status?: VideoStatus;
          video_url?: string | null;
          thumbnail_url?: string | null;
          error_message?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "videos_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedSchema: "public";
          },
          {
            foreignKeyName: "videos_niche_id_fkey";
            columns: ["niche_id"];
            isOneToOne: false;
            referencedRelation: "niches";
            referencedSchema: "public";
          }
        ];
      };
      scheduled_posts: {
        Row: {
          id: string;
          user_id: string;
          video_id: string;
          channel_id: string | null;
          platform: ChannelPlatform;
          scheduled_at: string;
          published_at: string | null;
          status: PostStatus;
          post_url: string | null;
          metrics: Json | null;
          error_message: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          video_id: string;
          channel_id?: string | null;
          platform: ChannelPlatform;
          scheduled_at: string;
          published_at?: string | null;
          status?: PostStatus;
          post_url?: string | null;
          metrics?: Json | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          video_id?: string;
          channel_id?: string | null;
          platform?: ChannelPlatform;
          scheduled_at?: string;
          published_at?: string | null;
          status?: PostStatus;
          post_url?: string | null;
          metrics?: Json | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "scheduled_posts_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedSchema: "public";
          },
          {
            foreignKeyName: "scheduled_posts_video_id_fkey";
            columns: ["video_id"];
            isOneToOne: false;
            referencedRelation: "videos";
            referencedSchema: "public";
          },
          {
            foreignKeyName: "scheduled_posts_channel_id_fkey";
            columns: ["channel_id"];
            isOneToOne: false;
            referencedRelation: "channels";
            referencedSchema: "public";
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_tier: UserTier;
      channel_platform: ChannelPlatform;
      video_status: VideoStatus;
      post_status: PostStatus;
      aspect_ratio: AspectRatio;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
